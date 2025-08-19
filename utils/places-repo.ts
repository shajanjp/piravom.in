import { NOTION_DB_PLACES } from "../config.ts";
import query from "./notion-client.ts";
import { ObjectLiteral } from "./types/object-literal.type.ts";

class PlacesRepo {
  async create(data: ObjectLiteral): Promise<any> {
    data.parent = {
      "database_id": NOTION_DB_PLACES,
    };
    return query({ method: "POST", url: `/pages`, body: data });
  }

  async getAll(filter: ObjectLiteral): Promise<ObjectLiteral> {
    return query({
      method: "POST",
      url: `/databases/${NOTION_DB_PLACES}/query`,
      body: filter,
    });
  }

  /**
   * Fetch all places grouped by category from Deno KV.
   * Returns an object: { [category: string]: Place[] }
   */
  async getAllFromKv(): Promise<Record<string, any[]>> {
    // @ts-ignore: Deno.openKv is unstable
    const kv = await Deno.openKv();
    const placesByCategory = new Map();
    const list = kv.list({ prefix: ["placesByCategory"] });
    for await (const entry of list) {
      const category = entry.key[1];
      if (!placesByCategory.has(category)) {
        placesByCategory.set(category, []);
      }
      placesByCategory.get(category).push(entry.value);
    }
    return Object.fromEntries(placesByCategory.entries());
  }

  /**
   * Fetch all places from Deno KV by category or categories.
   * @param category string or array of strings (category or categories)
   * @returns array of place objects
   */
  async getPlacesFromKvByCategory(category: string | string[]): Promise<any[]> {
    // @ts-ignore: Deno.openKv is unstable
    const kv = await Deno.openKv();
    const categories = Array.isArray(category) ? category : [category];
    const places: any[] = [];
    for (const cat of categories) {
      const list = kv.list({ prefix: ["placesByCategory", cat] });
      for await (const entry of list) {
        places.push(entry.value);
      }
    }
    return places;
  }
}

export default new PlacesRepo();
