import express from 'express';
import request from 'supertest';

test('request query param', async () => {
    const app = express();
    app.get('/', (req, res) => {
        res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
    });

    const response = await request(app)
        .get('/')
        .query({ firstName: "Lutfiya", lastName: "Ainurrahman" });

    expect(response.text).toEqual("Hello Lutfiya Ainurrahman");
});