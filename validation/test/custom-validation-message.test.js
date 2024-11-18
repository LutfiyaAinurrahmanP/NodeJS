const Joi = require("joi");

describe('custom validation messages', () => {
    test('simple schema message', () => {
        const schema = Joi.string().min(3).max(100).required().messages({
            'string.min': '{{ #label }} panjang harus minimal {{ #limit }} karakter '
        });

        const request = "aqaa";

        const result = schema.validate(request);
        if (result.error) {
            console.info(result.error);
        }
    });
    test('complex schema message', () => {
        const schema = Joi.object({
            email: Joi.string().required().email().messages({
                'any.required': 'Email harus diisi',
                'string.email': 'Email harus valid',
            }),
            password: Joi.string().required().min(3).max(12).messages({
                'any.required': 'Password harus diisi',
                'string.min': 'Password minimal {{#limit}} karakter',
                'string.max': 'Password maksimal {{#limit}} karakter',
            })
        });
        const request = {
            email: "lutfiya@gmail.com",
            password: "123"
        }

        const result = schema.validate(request, {
            abortEarly: false
        });

        console.info(request);
        if (result.error) {
            console.info(result.error);
        }
    });
});