import { getProduct, getProductById } from "../src/databases";
import { ProductService } from "../src/product-services";

jest.mock("../src/databases.js", () => {
    const originalModule = jest.requireActual("../src/databases.js");

    return {
        __esModule: true,
        ...originalModule,
        getProduct: jest.fn(),
    };
});

jest.mock("../src/databases.js");
test.failing('mock modules getProductById', () => {
    ProductService.finById(1);
});

test('mock modules getProduct', () => {
    const product = [
        {
            id: 1,
            name: "Product 1"
        },
        {
            id: 2,
            name: "Product 2"
        }
    ]
    getProduct.mockImplementation(() => {
        return product;
    });
    expect(ProductService.findAll()).toEqual(product);
});