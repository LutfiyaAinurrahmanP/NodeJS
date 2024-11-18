import Joi from 'joi';


test('date validation', () => {
    const birthDateSchema = Joi.date().required().max("now").min("1950-1-1");

    const result = birthDateSchema.validate("2024-11-18");
    console.info(result);

    const result2 = birthDateSchema.validate("1950-1-1");
    console.info(result2);
});