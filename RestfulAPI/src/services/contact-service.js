import { prismaClient } from "../applications/databases.js";
import { createContactValidation, getContactValidation, updateContactValidation } from "../validations/contact-validation.js"
import { validate } from "../validations/validation.js"
import { ResponseError } from "../errors/response-error.js";
import { getUserValidation } from "../validations/user-validation.js";

const create = async (user, request) => {
    const contact = validate(createContactValidation, request);
    contact.username = user.username;


    return prismaClient.contact.create({
        data: contact,
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            phone: true
        }
    });
}

const get = async (user, contactId) => {
    contactId = validate(getContactValidation, contactId);

    const contact = await prismaClient.contact.findUnique({
        where: {
            username: user.username,
            id: contactId
        },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            phone: true,
        }
    });

    if (!contact) {
        throw new ResponseError(404, "Contact is not found");
    };
    return contact;
}

const update = async (user, request) => {
    const contact = validate(updateContactValidation, request);

    const totalContactInDatabase = await prismaClient.contact.count({
        where: {
            username: user.username,
            id: contact.id
        }
    });
    if(totalContactInDatabase !== 1){
        throw new ResponseError(404, "contact is not found");
    }
    return prismaClient.contact.update({
        where: {
            id: contact.id
        },
        data: {
            first_name: contact.first_name,
            last_name: contact.last_name,
            email: contact.email,
            phone: contact.phone
        },
        select:{
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            phone: true,
        }
    })
}

export default {
    create,
    get,
    update,
    remove
}