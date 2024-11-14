import express from 'express';
import request from 'supertest';

const app = express();
app.use(express.static(__dirname + "/static"));
app.get('/', (req, res) => {
    res.send("Hello Response");
});

test('static file', async () => {
    let response = await request(app)
        .get('/');
    expect(response.text).toBe("Hello Response");
    response = await request(app)
        .get('/test.txt');
    expect(response.text).toBe("ini adalah teks untuk static file");
});