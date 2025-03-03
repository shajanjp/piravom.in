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
}

export default new PlacesRepo();
