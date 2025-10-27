export const useApi = () => {
    const {$axios} = useNuxtApp();

    const fetchProductById = id => $axios.get(`/products/${id}`);

    const fetchProductsByKeyword = keyword =>
        $axios.get(`/products`, {
            params: {
                name_like: keyword,
            }
        });

    const fetchCartItems = () => $axios.get(`/carts`);

    const createCartItem = cartItem => $axios.post(`/carts`, cartItem)


    return {
        fetchProductById,
        fetchProductsByKeyword,
        fetchCartItems,
        createCartItem,
    }
}