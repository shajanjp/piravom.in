import { loadDataToKv } from "./utils/store-util.ts";

console.log("initializing crons");

Deno.cron("Update cache data", "0 6 * * *", async () => {
  console.log("Running cron to load data to kv store");
  await loadDataToKv();
});
