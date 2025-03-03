import { NOTION_TOKEN } from "../config.ts";
import { ObjectLiteral } from "./types/object-literal.type.ts";

class Database {
  public query;

  constructor() {
    this.query = (
      { url, method, body }: {
        url: string;
        method: string;
        body?: ObjectLiteral;
      },
    ) => {
      const myHeaders = new Headers();

      myHeaders.append("Authorization", `Bearer ${NOTION_TOKEN}`);
      myHeaders.append("Notion-Version", "2022-06-28");
      myHeaders.append("Content-Type", "application/json");

      const requestOptions: RequestInit = {
        method: method,
        headers: myHeaders,
        redirect: "follow",
      };

      if (body) {
        const raw = JSON.stringify(body);

        requestOptions.body = raw;
      }

      return fetch(
        `https://api.notion.com/v1${url}`,
        requestOptions,
      )
        .then((response) => response.json());
    };
  }
}

export default new Database().query;
