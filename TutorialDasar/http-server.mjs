import http from "http";

const server = http.createServer((request, response) => {
    // console.info(request.method);
    // console.info(request.url);
    // response.write("Hello world!");
    // response.end();

    // program kedua
    if (response.method === "POST") {
        request.addListener("data", (data) => {
            response.setHeader("Content-Type", "application/json");
            response.write(data);
            response.end();
        })
    }
    else {
        response.write("Hello world!");
        response.end();
    }
});

server.listen(3000, () => {
    console.info("Runing at http://localhost:3000")
});