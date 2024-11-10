import express from 'express';
import request from 'supertest';

test('response set atau header',async () => {
    const app = express();
    app.get('/', (req,res)=>{
        res.set({
            'X-Powered-By': "Lutfiya Ainurrahman Prasetyo",
            'X-Author': "Lutfiya"
        }).end();
    })
    const response = await request(app).get('/');

    expect(response.get('X-Powered-By')).toBe("Lutfiya Ainurrahman Prasetyo");
    expect(response.get('X-Author')).toBe("Lutfiya");

});