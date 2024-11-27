import supertest from "supertest";
import { removeAllTestContacts, createTestUser, removeTestUser, createTestContact, getTestContact, createManyTestContact, removeAllTestAddresses } from "./test-util.js";
import { web } from "../src/applications/web.js";

describe('POST /api/contact/:contactId/addresses', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    });
    afterEach(async () => {
        await removeAllTestAddresses();
        await removeAllTestContacts();
        await removeTestUser();
    });
    test('should can create new address', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .post("/api/contacts/" + testContact.id + "/addresses")
            .set("Authorization", "test")
            .send({
                street: "test",
                city: "test",
                province: "test",
                country: "test",
                postal_code: "test",
            });
        expect(result.status).toBe(200);
    });
});