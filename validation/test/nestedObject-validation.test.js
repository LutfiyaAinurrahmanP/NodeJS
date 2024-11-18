const Joi = require("joi");

test('nested object validation', () => {
    const createUserSchema = Joi.object({
        id: Joi.string().required().max(100),
        name: Joi.string().required().max(100),
        address: Joi.object({
            street: Joi.string().required().max(100),
            city: Joi.string().required().max(100),
            country: Joi.string().required().max(100),
            zipCode: Joi.string().required().max(100),
        }).required()
    })

    const request = {
        id: "UID001",
        name: "Lutfiya Ainurrahman Prasetyo",
        address: {
            street: "street upi",
            city: "city upi",
            country: "country upi",
            zipCode: "zipCode upi"
        }
    };

    const result = createUserSchema.validate(request, {
        abortEarly: false
    });


    console.info(result);
    // console.info(JSON.stringify(result));
});