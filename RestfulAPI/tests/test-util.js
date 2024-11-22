import { prismaClient } from "../src/applications/databases"
import bcrypt from "bcrypt";

const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            username: "test"
        }
    })
}

const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            username: "test",
            password: await bcrypt.hash("rahasia", 10),
            name: "test",
            token: "test"
        }
    })
}

const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
            username: "test"
        }
    })
}

const removeAllTestContacts = async ()=>{
    await prismaClient.contact.deleteMany({
        where: {
            username: "test"
        }
    })
};

const createTestContacts = async () => {
    await prismaClient.contact.create({
        data: {
            first_name: "test",
            last_name: "test",
            email: "test@gmail.com",
            phone: "0809",
        }
    })
}

export {
    removeTestUser,
    createTestUser,
    getTestUser,

    // contacts
    removeAllTestContacts,
    createTestContacts
}