import { getUsers } from "../query-functions/getusers";

export const server = Bun.serve({
  port: 8000,
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/api") {
      const res = new Response("home page");
      res.headers.set("Access-Control-Allow-Origin", "*");
      res.headers.set(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      return res;
    }
    if (url.pathname === "/api/users") {
      try {
        const users = await getUsers(); // Wait for the getUsers() promise to resolve
        const res = new Response(JSON.stringify(users), {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Content-Type": "application/json",
          },
        });
        return res;
      } catch (error) {
        // Handle any errors that occur during the getUsers() call
        return new Response("Error: " + error.message, { status: 500 });
      }
    }

    return new Response("404");
  },
});
