import supertest from "supertest";
import { removeAllTestContacts, createTestUser, removeTestUser, createTestContact, getTestContact, createManyTestContact, removeAllTestAddresses, createTestAddress, getTestAddress } from "./test-util.js";
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
                street: "stest",
                city: "citest",
                province: "ptest",
                country: "cotest",
                postal_code: "pctest",
            });
        expect(result.status).toBe(200);
        expect(result.body.data.id).toBeDefined();
        expect(result.body.data.street).toBe("stest");
        expect(result.body.data.city).toBe("citest");
        expect(result.body.data.province).toBe("ptest");
        expect(result.body.data.country).toBe("cotest");
        expect(result.body.data.postal_code).toBe("pctest");
    });
    test('should reject if address request is invalid', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .post("/api/contacts/" + testContact.id + "/addresses")
            .set("Authorization", "test")
            .send({
                street: "stest",
                city: "citest",
                province: "ptest",
                country: "",
                postal_code: "",
            });
        expect(result.status).toBe(400);
    });
    test('should reject if contact is not found', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .post("/api/contacts/" + (testContact.id + 1) + "/addresses")
            .set("Authorization", "test")
            .send({
                street: "stest",
                city: "citest",
                province: "ptest",
                country: "",
                postal_code: "",
            });
        expect(result.status).toBe(404);
    });
});

describe('GET /api/contacts/:contactId/addresses/:addressId', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
        await createTestAddress();
    });
    afterEach(async () => {
        await removeAllTestAddresses();
        await removeAllTestContacts();
        await removeTestUser();
    });
    test('should can get address data', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();
        const result = await supertest(web)
            // .get(`/api/contacts/${testContact.id}/addresses/${testAddress.id}`)
            .get("/api/contacts/" + testContact.id + "/addresses/" + testAddress.id)
            .set("Authorization", "test");
        expect(result.status).toBe(200);
    });
    test('should reject if contact is not found', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .get('/api/contacts/' + (testContact.id + 1) + '/addresses/' + testAddress.id)
            .set('Authorization', 'test');

        expect(result.status).toBe(404);
    });
    it('should reject if address is not found', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .get('/api/contacts/' + testContact.id + '/addresses/' + (testAddress.id + 1))
            .set('Authorization', 'test');

        expect(result.status).toBe(404);
    });
});

describe('PUT api/contact/:contactId/addresses/:addressId', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
        await createTestAddress();
    });
    afterEach(async () => {
        await removeAllTestAddresses();
        await removeAllTestContacts();
        await removeTestUser();
    });
    test('should can update address with id', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();
        const result = await supertest(web)
            .put(`/api/contacts/${testContact.id}/addresses/${testAddress.id}`)
            .set("Authorization", "test")
            .send({
                street: "test street",
                city: "test city",
                province: "test province",
                country: "test country",
                postal_code: "test postalcode",
            });
        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testAddress.id);
        expect(result.body.data.street).toBe("test street");
        expect(result.body.data.city).toBe("test city");
        expect(result.body.data.province).toBe("test province");
        expect(result.body.data.country).toBe("test country");
        expect(result.body.data.postal_code).toBe("test postalcode");
    });

    test('should reject if contact is not found', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .put('/api/contacts/' + (testContact.id + 1) + '/addresses/' + testAddress.id)
            .set('Authorization', 'test')
            .send({
                street: "street",
                city: 'city',
                province: 'provinsi',
                country: 'indonesia',
                postal_code: '2312323'
            });

        expect(result.status).toBe(404);
    });
    test('should reject if address is not found', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .put('/api/contacts/' + testContact.id + '/addresses/' + (testAddress.id + 1))
            .set('Authorization', 'test')
            .send({
                street: "street",
                city: 'city',
                province: 'provinsi',
                country: 'indonesia',
                postal_code: '2312323'
            });

        expect(result.status).toBe(404);
    });

    test('should reject if data is empty', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();

        const result = await supertest(web)
            .put('/api/contacts/' + testContact.id + '/addresses/' + (testAddress.id + 1))
            .set('Authorization', 'test')
            .send({
                street: "street",
                city: 'city',
                province: 'provinsi',
                country: '',
                postal_code: '2312323'
            });

        expect(result.status).toBe(400);
    });
});

describe('DELETE api/contact/:contactId/addresses/:addressId', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
        await createTestAddress();
    });
    afterEach(async () => {
        await removeAllTestAddresses();
        await removeAllTestContacts();
        await removeTestUser();
    });
    test('should can remove address data with id parameter', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();
        const result = await supertest(web)
            .delete((`/api/contacts/${testContact.id}/addresses/${testAddress.id}`))
            .set("Authorization", "test");
        expect(result.status).toBe(200);
    });
    test('should reject address parameter', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();
        const result = await supertest(web)
            .delete((`/api/contacts/${testContact.id}/addresses/${testAddress.id + 1}`))
            .set("Authorization", "test");
        expect(result.status).toBe(404);
    });
    test('should reject contact parameter', async () => {
        const testContact = await getTestContact();
        const testAddress = await getTestAddress();
        const result = await supertest(web)
            .delete((`/api/contacts/${testContact.id + 1}/addresses/${testAddress.id}`))
            .set("Authorization", "test");
        expect(result.status).toBe(404);
    });
});

describe('GET /api/contacts/:contactId/addresses', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
        await createTestAddress();
    });
    afterEach(async () => {
        await removeAllTestAddresses();
        await removeAllTestContacts();
        await removeTestUser();
    });
    test('should can get many address data', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .get(`/api/contacts/${testContact.id}/addresses`)
            .set("Authorization", "test");
        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(1);
    });

    test('should reject if contact is not found', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .get(`/api/contacts/${testContact.id + 1}/addresses`)
            .set("Authorization", "test");
        expect(result.status).toBe(404);
    });
});