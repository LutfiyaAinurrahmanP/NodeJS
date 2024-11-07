import { getProduct, getProductById } from "../src/databases";
import { ProductService } from "../src/product-services";

jest.mock("../src/databases.js");
test('mock modules getProductById', () => {
    getProductById.mockImplementation((id) => {
        return { id: id, name: "Product Mock" };
    });

    const product = ProductService.finById(1);
    expect(product).toEqual({ id: 1, name: "Product Mock" });
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