import { Handlers } from "$fresh/server.ts";

import { loadDataToKv } from "../../utils/store-util.ts";

export const handler: Handlers = {
  async GET(_req) {
    await loadDataToKv();

    return Response.json({ success: true }, { status: 200 });
  },
};
