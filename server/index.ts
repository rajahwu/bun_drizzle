const getUsers = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    "users": [
      {
        "id": "78b5c397-0e78-440e-ba7b-03d3230e346a",
        "username": "user01",
        "password": "123456"
      },
      {
        "id": "9b03b999-4ad4-476c-9fc2-283b58f5855b",
        "username": "user02",
        "password": "123456"
      },
      {
        "id": "ad0c0cb9-b9b4-48b1-ae2a-787d5c759466",
        "username": "user03",
        "password": "123456"
      }
    ]
  }
}

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
