import express from 'express';
import request from 'supertest';

const logger = (req, res, next) => {
    console.log(`receive request : ${req.method} ${req.originalUrl}`);
    next();
};
const addPoweredHeader = (req, res, next) => {
    res.set('X-Powered-By', 'Lutfiya Ainurrahman Prasetyo');
    next();
};

const apiKeyMiddleware = (req, res, next) => {
    if (req.query.apiKey) {
        next();
    } else {
        res.status(401).end();
    }
}

const requestTimeMiddleware = (req, res, next) => {
    req.requestTime = Date.now();
    next();
}

const app = express();
app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);
app.use(requestTimeMiddleware);

app.get('/', (req, res) => {
    res.send('Hello middleware');
});

app.get('/time', (req, res) => {
    req.requestTime
    res.send(`Hello, Today is ${req.requestTime}`);
});

test('test middleware', async () => {
    const response = await request(app).get('/').query({ apiKey: "1234" });
    expect(response.get('X-Powered-By')).toBe("Lutfiya Ainurrahman Prasetyo");
    expect(response.text).toBe("Hello middleware");
});
test('test 401 middleware', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(401);
});

test('test middleware time', async () => {
    const response = await request(app).get('/time').query({ apiKey: "1234" });
    expect(response.get('X-Powered-By')).toBe("Lutfiya Ainurrahman Prasetyo");
    expect(response.text).toContain("Hello, Today is");
});