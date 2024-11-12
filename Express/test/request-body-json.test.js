import express from 'express';
import request from 'supertest';

test('request body json', async () => {
    const app = express();

    app.use(express.json());
    app.post('/json', (req, res) => {
        const name = req.body.name;
        res.json({ hello: `Hello ${name}` });
    });

    app.use(express.urlencoded({extended: false}));
    app.post('/form', (req, res) => {
        const name = req.body.name;
        res.json({ hello: `Hello ${name}` });
    });

    let response = await request(app)
    .post('/json')
    .set("Content-Type", "application/json")
    .send({ name: 'World' });
    expect(response.body).toEqual({ hello: "Hello World" });

    response = await request(app)
    .post('/form')
    .set("Content-Type", "application/x-www-form-urlencoded")
    .send("name=World");
    expect(response.body).toEqual({ hello: "Hello World" });
});