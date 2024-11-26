import supertest from "supertest";
import { removeAllTestContacts, createTestUser, removeTestUser, createTestContact, getTestContact, createManyTestContact } from "./test-util.js";
import { web } from "../src/applications/web.js";
import { logger } from "../src/applications/logging.js";

describe('POST / api/contact', () => {
    beforeEach(async () => {
        await createTestUser();
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

describe('GET /api/contacts/:contactId', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    });
    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    });
    test('should can get contact', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .get('/api/contacts/' + testContact.id)
            .set("Authorization", "test");
        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testContact.id);
        expect(result.body.data.first_name).toBe(testContact.first_name);
        expect(result.body.data.last_name).toBe(testContact.last_name);
        expect(result.body.data.email).toBe(testContact.email);
        expect(result.body.data.phone).toBe(testContact.phone);
    });

    test('should return 404 is contactId is not found', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .get('/api/contacts/' + (testContact.id + 1))
            .set("Authorization", "test");
        expect(result.status).toBe(404);
    });
});

describe('PUT /api/contacts/:contactId', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    });
    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    });
    test('can update data contact', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .put('/api/contacts/' + testContact.id)
            .set("Authorization", "test")
            .send({
                first_name: "Upi",
                last_name: "Upi",
                email: "upi@gmail.com",
                phone: "0899"
            });
        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testContact.id);
        expect(result.body.data.first_name).toBe("Upi");
        expect(result.body.data.last_name).toBe("Upi");
        expect(result.body.data.email).toBe("upi@gmail.com");
        expect(result.body.data.phone).toBe("0899");
    });

    test('cant update data contact', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .put('/api/contacts/' + testContact.id)
            .set("Authorization", "test")
            .send({
                first_name: "",
                last_name: "",
                email: "",
                phone: ""
            });
        expect(result.status).toBe(400);
    });

    test('should reject if contact is not found', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .put('/api/contacts/' + (testContact.id + 1))
            .set("Authorization", "test")
            .send({
                first_name: "Upi",
                last_name: "Upi",
                email: "upi@gmail.com",
                phone: "0899"
            });
        expect(result.status).toBe(404);
    });
});

describe('DELETE /api/contacts/:contactId', () => {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    });
    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    });
    test('should can delete contact', async () => {
        let testContact = await getTestContact();
        const result = await supertest(web)
            .delete('/api/contacts/' + testContact.id)
            .set('Authorization', 'test');

        expect(result.status).toBe(200);
        expect(result.body.data).toBe("Contact Berhasil Dihapus");

        testContact = await getTestContact();
        expect(testContact).toBeNull();
    });

    test('should can delete contact', async () => {
        let testContact = await getTestContact();
        const result = await supertest(web)
            .delete('/api/contacts/' + (testContact.id + 1))
            .set('Authorization', 'test');

        expect(result.status).toBe(404);
    });
});

describe('GET /api/contacts', () => {
    beforeEach(async () => {
        await createTestUser();
        await createManyTestContact();
    });
    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    });
    test('should can search without parameter', async () => {
        const result = await supertest(web)
            .get('/api/contacts')
            .set('Authorization', 'test');
        expect(result.body.data.length).toBe(10);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.paging.total_page).toBe(2);
        expect(result.body.paging.total_item).toBe(15);
    });
    test('should can search to page 2', async () => {
        const result = await supertest(web)
            .get('/api/contacts')
            .query({
                page: 2
            })
            .set('Authorization', 'test');
        logger.info(result.body);
        expect(result.body.data.length).toBe(5);
        expect(result.body.paging.page).toBe(2);
        expect(result.body.paging.total_page).toBe(2);
        expect(result.body.paging.total_item).toBe(15);
    });
    test('should can search using name', async () => {
        const result = await supertest(web)
            .get('/api/contacts')
            .query({
                name: "test 1"
            })
            .set('Authorization', 'test');
        logger.info(result.body);
        expect(result.body.data.length).toBe(6);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.paging.total_page).toBe(1);
        expect(result.body.paging.total_item).toBe(6);
    });
    test('should can search using email', async () => {
        const result = await supertest(web)
            .get('/api/contacts')
            .query({
                email: "test1"
            })
            .set('Authorization', 'test');
        logger.info(result.body);
        expect(result.body.data.length).toBe(6);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.paging.total_page).toBe(1);
        expect(result.body.paging.total_item).toBe(6);
    });
    test('should can search using phone', async () => {
        const result = await supertest(web)
            .get('/api/contacts')
            .query({
                phone: "08191"
            })
            .set('Authorization', 'test');
        logger.info(result.body);
        expect(result.body.data.length).toBe(6);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.paging.total_page).toBe(1);
        expect(result.body.paging.total_item).toBe(6);
    });

});