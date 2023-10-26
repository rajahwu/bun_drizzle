export const server = Bun.serve({
  port: 8000,
  fetch(req) {
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

    return new Response("404");
  },
});
