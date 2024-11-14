const cookieParser = require('cookie-parser');
const express = require('express');
const request = require('supertest');

const app = express();

app.use(express.json()); app.use(cookieParser("SECRETKEYKU"));

app.post('/login', (req, res) => {
    const name = req.body.name;
    res.cookie('Login', name, { path: '/', signed: true });
    res.send(`Hello ${name}`);
});

app.get('/', (req, res) => {
    const name = req.signedCookies["Login"];
    res.send(`Hello ${name}`);
})

test('cookie write signed', async () => {
    const response = await request(app)
        .post('/login')
        .send({ name: "Lutfiya" });
    console.info(response.get('Set-Cookie').toString());
    expect(response.get('Set-Cookie').toString()).toContain('Lutfiya');
    expect(response.text).toBe('Hello Lutfiya');
});

test('cookie read signed', async () => {
    const response = await request(app)
        .get('/')
        .set('Cookie', 'Login=s%3ALutfiya.sgAIPcMGhYwNbTmiMUrgmCLJ6yTPtL0htmLD0Liv4EA; Path=/');
        expect(response.text).toBe("Hello Lutfiya")
});