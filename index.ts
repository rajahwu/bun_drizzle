Bun.serve({
    port: 8000,
    fetch(req) {
        console.log(`Bun serving on ${this.port}`)
        return new Response(Bun.file("index.html"))
    }
})
