import express from 'express';
import supertest from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/response-body-other.txt");
});

test('response sendfile',async () => {
    const response = await supertest(app).get('/');
    expect(response.text).toBe("Hello response");
});