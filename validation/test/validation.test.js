import Joi from 'joi';
describe('joi', () => {
    test('should can create schema', () => {
        const schema = Joi.string().min(3).max(100).required();
        
        const result = schema.validate("lutpi");

        if(result.error){
            console.info(result.error);
        }
    });
    test('should can validate data type', () => {
        const usernameSchema = Joi.string().email().required();
        const isAdminSchema = Joi.boolean().required();
        const priceSchema = Joi.number().required().min(1000).max(2000);

        const resultUsername = usernameSchema.validate("lutfiya@gmail.com");
        console.info(resultUsername);

        const resultAdmin = isAdminSchema.validate(true);
        console.info(resultAdmin);

        const resultPrice = priceSchema.validate(1500);
        console.info(resultPrice);
    });
});