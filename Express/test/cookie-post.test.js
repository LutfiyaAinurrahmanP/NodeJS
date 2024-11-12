import express from 'express';
import request from 'supertest';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get(`/name`, (req, res) => {
    const name = req.cookies.name;
    res.send(`Hello ${name}`);
});

app.post(`/login`, (req, res) => {
    const name = req.body.name;
    res.cookie(`Login`, name, { path: `/` });
    res.send(`Hello ${name}`);
});

test('cookie read', async () => {
    const response = await request(app)
        .get(`/name`)
        .set(`Cookie`, `name=Lutfiya`);
    expect(response.text).toBe(`Hello Lutfiya`);
});

test('cookie write',async () => {
    const response = await request(app)
    .post(`/login`)
    .send({name: `Lutfiya`});
    expect(response.get(`Set-Cookie`).toString()).toBe(`Login=Lutfiya; Path=/`)
    expect(response.text).toEqual(`Hello Lutfiya`);
});