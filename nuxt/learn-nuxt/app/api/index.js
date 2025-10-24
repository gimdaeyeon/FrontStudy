import axios from "axios";

const instance = axios.create({
    baseURL: process.env.API_BASE_URL,
})

export function fetchProductById(id) {
    return instance.get(`/products/${id}`);
}

export function fetchProductsByKeyword(keyword) {
    return instance.get(`/products`, {
        params: {
            name_like: keyword,
        }
    });
}

export function fetchCartItems(){
    return instance.get(`/carts`);
}

export function createCartItem(cartItem){
    return instance.post(`/carts`,cartItem)
}
