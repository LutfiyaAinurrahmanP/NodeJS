import { getProduct, getProductById } from "./databases";

export class ProductService {
    static finById(id) {
        return getProductById(id);
    }

    static findAll(){
        return getProduct();
    }
};