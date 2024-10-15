import net from "net";

const server = net.createServer((client)=> {
    console.info("client connected");

    client.addListener("data", (data)=> {
        console.info(`receive at ${data.toString()}`);
        client.write(`Hello ${data.toString()}\r\n`);
    })
});

server.listen(3000, "localhost");