import placesRepo from "./places-repo.ts";

export async function loadDataToKv() {
  console.log("loading data to kv");
  const kv = await Deno.openKv();

  console.log("removing existing data from kv");
  const placesByCategoryKeys = await kv.list({ prefix: ["placesByCategory"] });

  for await (const key of placesByCategoryKeys) {
    await kv.delete(key.key);
  }

  const placesKeys = await kv.list({ prefix: ["places"] });

  for await (const key of placesKeys) {
    await kv.delete(key.key);
  }

  const places = await getPlacesDataFromNotion();
  console.log("loading new data to kv");

  let batch = kv.atomic();
  let batchCount = 0;

  for (const place of places) {
    batch.set(["places", place.id], place);
    batch.set(["placesByCategory", place.category, place.id], place);
    batchCount += 2;

    if (batchCount >= 500) {
      await batch.commit();

      batch = kv.atomic();
      batchCount = 0;
    }
  }

  if (batchCount > 0) {
    await batch.commit();
  }

  console.log("completed loading data to kv");
}

async function getPlacesDataFromNotion() {
  const { results } = await placesRepo.getAll({
    "sorts": [
      {
        "property": "Rank",
        "direction": "ascending",
      },
    ],
  });

  return results.map(({ properties, id }) => ({
    id,
    name: properties["Name"]?.title?.[0]?.plain_text,
    mapUrl: properties["Google Map Location"]?.url,
    description: properties["Description"]?.rich_text?.[0]?.plain_text,
    category: properties["Category"]?.select?.name,
  }));
}
