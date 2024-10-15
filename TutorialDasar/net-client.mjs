import net from "net";

const connect = net.createConnection({port: 3000, host: "localhost"});

setInterval(function(){
    connect.write("lutfiya\r\n");
}, 2000);

connect.addListener("data", (data)=>{
    console.info(`Receive data from server ${data.toString()}`);
});

setInterval(() => {
    connect.write("upi\r\n");
}, 2000);