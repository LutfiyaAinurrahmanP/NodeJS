import express from 'express';
import request from 'supertest';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());

app.get(`/name`, (req, res) => {
    const name = req.cookies["name"];
    res.send(`Hello ${name}`);
});

app.get(`/nim`, (req, res) => {
    const nim = req.cookies.nim;
    res.send(`NIM adalah ${nim}`);
})

test('cookie read', async () => {
    let response = await request(app)
        .get(`/name`)
        .set(`Cookie`, `name=Lutfiya`);
    expect(response.text).toBe(`Hello Lutfiya`);

    response = await request(app)
        .get(`/nim`)
        .set(`Cookie`, `nim=220102060`)
    expect(response.text).toBe(`NIM adalah 220102060`)
});