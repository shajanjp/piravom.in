import placesRepo from "./utils/places-repo.ts";

console.log("initializing crons");

await loadDataToKv();

Deno.cron("Update cache data", "0 6 * * *", async () => {
  console.log("Running cron to load data to kv store");

  await loadDataToKv();
});

async function loadDataToKv() {
  const kv = await Deno.openKv();
  console.log("removing existing data from kv");
  await kv.delete(["placesByCategory"]);
  await kv.delete(["places"]);

  const places = await getPlacesDataFromNotion();
  console.log("loading new data to kv");

  for (let place of places) {
    await kv.set(["places", place.id], place);
    await kv.set(["placesByCategory", place.category, place.id], place);
  }
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
