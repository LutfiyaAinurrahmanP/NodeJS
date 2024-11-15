import { prismaClient } from "./prisma-client";

const getData = async () => {
    return await prismaClient.$executeRaw`SELECT * FROM users`;
}

const addData = async (name) => {
    return await prismaClient.$executeRaw`INSERT INTO users(name) VALUES(${name})`;
}

const updateData = async (id, newName) => {
    return await prismaClient.$executeRaw`UPDATE users set name = ${newName} WHERE id = ${id}`
}

const deleteData = async (id) => {
    return await prismaClient.$executeRaw`DELETE FROM users WHERE id = ${id}`
}

export { getData, addData, updateData, deleteData };