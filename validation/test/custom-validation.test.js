const Joi = require("joi");

test('custom validation', () => {
    const registerSchema = Joi.object({
        username: Joi.string().required().min(3).max(100).email(),
        password: Joi.string().required().min(6).max(100).custom((value, helper) => {
            if (value.startsWith("lutpi")) {
                return helper.error("password.wrong");
            }
            return value;
        }).messages({
            'password.wrong': 'password can not start with lutpi'
        }),
        confirmPassword: Joi.string().required().min(6).max(100)
    }).custom((value, helper) => {
        if (value.password !== value.confirmPassword) {
            return helper.error("register.password.different");
        }
        return value;
    }).messages({
        'register.password.different': "password and confirmPassword is different"
    });

    const request = {
        username: "lutfiyaainurrahman@gmail.com",
        password: "lutp87",
        confirmPassword: "lutp87"
    };

    const result = registerSchema.validate(request, {
        abortEarly: false
    });

    console.info(result);
});