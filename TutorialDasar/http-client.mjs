import https from "https";

const url = "https://eozwxb2bksthuca.m.pipedream.net";
const request = https.request(url, {
    method: "POST",
    header: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive ${data.toString()}`)
    })
});

const body = JSON.stringify({
    firstName: "Lutfiya",
    lastName: "Ainurrahman"
});

request.write(body);
request.end();