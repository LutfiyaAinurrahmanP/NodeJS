import supertest from "supertest";
import { removeAllTestContacts, createTestUser, removeTestUser, createTestContacts } from "./test-util.js";
import { web } from "../src/applications/web.js";

describe('POST / api/contact', () => {
    beforeEach(async () => {
        await createTestUser();
        // await createTestContacts();
    });
    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    });

    test('should can create new contact', async () => {
        const result = await supertest(web)
            .post('/api/contacts')
            .set("Authorization", "test")
            .send({
                first_name: "test",
                last_name: "test",
                email: "test@gmail.com",
                phone: "0809",
            });
        expect(result.status).toBe(200);
        expect(result.body.data.id).toBeDefined();
        expect(result.body.data.first_name).toBe("test");
        expect(result.body.data.last_name).toBe("test");
        expect(result.body.data.email).toBe("test@gmail.com");
        expect(result.body.data.phone).toBe("0809");
    });

    test('should request is not valid', async () => {
        const result = await supertest(web)
            .post('/api/contacts')
            .set("Authorization", "test")
            .send({
                first_name: "",
                last_name: "test",
                email: "test",
                phone: "0809131231231231232131231232",
            });
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});