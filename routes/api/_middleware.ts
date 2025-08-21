import { FreshContext } from "$fresh/server.ts";
import { ADMIN_PASSWORD, ADMIN_USERNAME } from "../../config.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const auth = req.headers.get("authorization");

  if (!auth || !auth.startsWith("Basic ")) {
    return new Response("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });
  }

  const b64 = auth.replace("Basic ", "");
  const [user, pass] = atob(b64).split(":");

  if (user !== ADMIN_USERNAME || pass !== ADMIN_PASSWORD) {
    return new Response("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });
  }

  return await ctx.next();
}
