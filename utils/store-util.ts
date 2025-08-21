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

  for (let place of places) {
    await kv.set(["places", place.id], place);
    await kv.set(["placesByCategory", place.category, place.id], place);
  }

  console.log("completed loading data to kv");
}

async function getPlacesDataFromNotion() {
  const { results } = await placesRepo.getAll();

  return results.map(({ properties, id }) => ({
    id,
    name: properties["Name"]?.title?.[0]?.plain_text,
    mapUrl: properties["Google Map Location"]?.url,
    description: properties["Description"]?.rich_text?.[0]?.plain_text,
    category: properties["Category"]?.select?.name,
  }));
}
