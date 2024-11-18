const Joi = require("joi");

describe('array', () => {
    test('array validation', () => {
        const hobbiesSchema = Joi.array().items(Joi.string().required().min(3).max(100));

        const hobbies = ["Coding", "Reading", "Gaming"];
        const result = hobbiesSchema.validate(hobbies);
        console.info(result);
    });
    test('array object validation', () => {
        const addressSchema = Joi.array().min(1).items(Joi.object({
            street: Joi.string().required().max(200),
            city: Joi.string().required().max(100),
            country: Joi.string().required().max(100)
        }));


        const addresses = [
            {
                street: "Street A",
                city: "City A",
                country: "Country A"
            },
            {
                street: "Street B",
                city: "City B",
                country: "Country B"
            },
            {
                street: "Street C",
                city: "City C",
                country: "Country C"
            }
        ];
        const result = addressSchema.validate(addresses, {
            abortEarly: false
        });
        console.info(result)
    });
});