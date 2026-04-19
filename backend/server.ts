import { env } from "./config/env";

export function startServer() {
  const server = Bun.serve({
    port: env.PORT || 3001,
    fetch(req) {
      const url = new URL(req.url);

      // temporary url
      if (url.pathname == "/") {
        return new Response("Vidora api is running ❤️");
      }

      return new Response("Not Found", { status: 404 });
    },
  });
  console.log(`🚀 Server running on http://localhost:${server.port}`);
}
