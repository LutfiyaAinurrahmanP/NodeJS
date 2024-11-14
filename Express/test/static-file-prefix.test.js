import express from 'express';
import request from 'supertest';

const app = express();

app.use('/static', express.static(__dirname + "/static"));
app.get('/', (req, res) => {
    res.send("Hello Response");
});

test('static file prefix', async () => {
    let response = await request(app)
        .get('/');
    expect(response.text).toBe("Hello Response");
    response = await request(app)
        .get('/static/test.txt');
    expect(response.text).toBe("ini adalah teks untuk static file");
});