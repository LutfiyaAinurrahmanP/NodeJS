import supertest from 'supertest';
import { prismaClient } from '../src/applications/databases';
import { web } from '../src/applications/web';
import { logger } from '../src/applications/logging';

describe('post /api/users', () => {

    afterEach(async () => {
        await prismaClient.user.deleteMany({
            where: {
                username: "lutfiya"
            }
        })
    })

    test('should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: "lutfiya",
                password: "rahasia",
                name: "Lutfiya Ainurrahman Prasetyo"
            })
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("lutfiya");
        expect(result.body.data.name).toBe("Lutfiya Ainurrahman Prasetyo");
        expect(result.body.data.password).toBeUndefined();
    });

    test('should reject username already registered', async () => {
        let result = await supertest(web)
            .post('/api/users')
            .send({
                username: "lutfiya",
                password: "rahasia",
                name: "Lutfiya Ainurrahman Prasetyo"
            })
        logger.info(result.body);
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("lutfiya");
        expect(result.body.data.name).toBe("Lutfiya Ainurrahman Prasetyo");
        expect(result.body.data.password).toBeUndefined();

        result = await supertest(web)
            .post('/api/users')
            .send({
                username: "lutfiya",
                password: "rahasia",
                name: "Lutfiya Ainurrahman Prasetyo"
            })

        logger.info(result.body);
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    test('should reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: "",
                password: "",
                name: ""
            })
        logger.info(result.body);
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});