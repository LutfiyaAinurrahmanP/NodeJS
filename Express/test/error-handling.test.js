import express from 'express';
import request from 'supertest';

const errorMiddleware = (err,req,res,next)=>{
    res.status(500).send(`Terjadi Error: ${err.message}`);
};

const app = express();
app.get('/', (req,res)=>{
    throw new Error("UPS");
});
app.use(errorMiddleware);

test('error handling',async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(500);
    expect(response.text).toBe("Terjadi Error: UPS");
});