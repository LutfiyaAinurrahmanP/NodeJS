// router parameter dapat mengambil data id dengan : , sedangkan
// router regex dengan * tidak dapat mengambil data 

import express from 'express';
import request from 'supertest';

const app = express();

app.get('/products/:id', (req, res) => {
    res.send(`Product: ${req.params.id}`);
});

app.get('/categories/:id(\\d+)', (req, res) => {
    res.send(`Category: ${req.params.id}`);
});

app.get(`/seller/:idSeller/products/:idProducts`, (req, res)=>{
    res.send(`Seller: ${req.params.idSeller}, Products: ${req.params.idProducts}`);
})

test('route parameter', async () => {
    let response = await request(app).get('/products/lutfiya');
    expect(response.text).toBe(`Product: lutfiya`);

    response = await request(app).get(`/products/salah`);
    expect(response.text).toBe(`Product: salah`);

    response = await request(app).get(`/categories/1234`);
    expect(response.text).toBe(`Category: 1234`);

    response = await request(app).get(`/categories/salah`);
    expect(response.status).toBe(404);

    response = await request(app).get(`/seller/123/products/kecap`);
    expect(response.text).toBe(`Seller: 123, Products: kecap`);
});