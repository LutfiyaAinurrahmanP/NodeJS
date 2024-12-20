const Joi = require("joi");

test('option validation', () => {
    const usernameSchema = Joi.string().min(5).email().required();

    const result = usernameSchema.validate("ups", {
        abortEarly: false
    });
    console.info(result.value);
    if(result.error){
        result.error.details.forEach(detail =>{
            console.info(`${detail.path} = ${detail.message}`);
        })
    }
});