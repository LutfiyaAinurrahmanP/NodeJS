import express from 'express';
import request from 'supertest';

const app = express();
app.get("/", (req, res) => {
    res.send(`Hello ${req.query.name}!`);
});

test("Test query ExpressJS", async () => {
    const response = await request(app).get("/").query({name: "World"});
    expect(response.text).toBe("Hello World!");
})