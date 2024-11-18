import Joi from 'joi';


test('result validation', () => {
    const birthDateSchema = Joi.date().required().max("now").min("1950-1-1");

    const result = birthDateSchema.validate("2024-11-19");
    console.info(result.value);
    console.info(result.error);

    const result2 = birthDateSchema.validate("1950-1-1");
    console.info(result2.value);
    console.info(result2.error);
});