import supertest from 'supertest';
import { web } from '../src/applications/web.js';
import { logger } from '../src/applications/logging.js';
import { createTestUser, getTestUser, removeTestUser } from './test-util.js';
import bcrypt from 'bcrypt';

describe('post /api/users', () => {

    afterEach(async () => {
        await removeTestUser();
    })

    test('should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: "test",
                password: "rahasia",
                name: "test"
            })
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("test");
        expect(result.body.data.password).toBeUndefined();
    });

    test('should reject username already registered', async () => {
        let result = await supertest(web)
            .post('/api/users')
            .send({
                username: "test",
                password: "rahasia",
                name: "test"
            })
        logger.info(result.body);
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("test");
        expect(result.body.data.password).toBeUndefined();

        result = await supertest(web)
            .post('/api/users')
            .send({
                username: "test",
                password: "rahasia",
                name: "test"
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

describe('POST /api/users/login', () => {
    beforeEach(async () => {
        await createTestUser();
    });
    afterEach(async () => {
        await removeTestUser();
    });

    test('should can login', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: "test",
                password: "rahasia"
            });
        logger.info(result.body);
        expect(result.status).toBe(200);
        expect(result.body.data.token).toBeDefined();
        expect(result.body.data.token).not.toBe("test");
    });

    test('should reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: "",
                password: ""
            });
        logger.info(result.body);
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    test('should reject if password is wrong', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: "test",
                password: "salah"
            });
        logger.info(result.body);
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });

    test('should reject if username is wrong', async () => {
        const result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: "salah",
                password: "rahasia"
            });
        logger.info(result.body);
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });
});

describe('GET /api/users/current', () => {
    beforeEach(async () => {
        await createTestUser();
    });
    afterEach(async () => {
        await removeTestUser();
    });
    test('should can get current user', async () => {
        const result = await supertest(web)
            .get('/api/users/current')
            .set('Authorization', 'test');
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("test");
    });

    test('should reject if token is invalid', async () => {
        const result = await supertest(web)
            .get('/api/users/current')
            .set('Authorization', 'kon');
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });
});


describe('PATCH /api/users/current', () => {
    beforeEach(async () => {
        await createTestUser();
    });
    afterEach(async () => {
        await removeTestUser();
    });

    test('should can update current user', async () => {
        const result = await supertest(web)
            .patch('/api/users/current')
            .set("Authorization", "test")
            .send({
                password: "pasewold",
                name: "upi",
            })
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("upi");

        const user = await getTestUser();
        expect(await bcrypt.compare("pasewold", user.password)).toBe(true);
    });

    test('should can update user name', async () => {
        const result = await supertest(web)
            .patch('/api/users/current')
            .set("Authorization", "test")
            .send({
                name: "upi",
            })
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("upi");
    });

    test('should can update user password', async () => {
        const result = await supertest(web)
            .patch('/api/users/current')
            .set("Authorization", "test")
            .send({
                password: "pasewold",
            })
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");;

        const user = await getTestUser();
        expect(await bcrypt.compare("pasewold", user.password)).toBe(true);
    });

    test('should can update user password', async () => {
        const result = await supertest(web)
            .patch('/api/users/current')
            .set("Authorization", "salah")
            .send({});
        expect(result.status).toBe(401);
    });
});

describe('DELETE /api/users/logout', () => {
    beforeEach(async () => {
        await createTestUser();
    });
    afterEach(async () => {
        await removeTestUser();
    });
    test('should user can logout', async () => {
        const result = await supertest(web)
            .delete('/api/users/logout')
            .set("Authorization", "test");
        expect(result.status).toBe(200);
        expect(result.body.data).toBe("Logout Success");

        const user = await getTestUser();
        expect(user.token).toBe(null);
    });
    test('should reject logout if token is invalid', async () => {
        const result = await supertest(web)
            .delete('/api/users/logout')
            .set("Authorization", "salah");
        expect(result.status).toBe(401);
    });
});