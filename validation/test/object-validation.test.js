const Joi = require("joi");

it('object validation', () => {
    const loginSchema = Joi.object({
        username: Joi.string().required().min(3).max(100).email(),
        password: Joi.string().required().min(6).max(100)
    });

    const request = {
        username: "Lutfiya@gmail.com",
        password: "rahasia"
    }

    const result = loginSchema.validate(request, {
        abortEarly: false
    });



    if (result.error) {
        result.error.details.forEach(detail => {
            console.info(`${detail.path} = ${detail.message}`);
        })
    } else {
        console.info(result);
    }
});