export const useApi = () => {
    const {$axios} = useNuxtApp();

    const fetchProductById = (id) => {
        return $axios.get(`/products/${id}`);
    }

    const fetchProductsByKeyword = (keyword) => {
        return $axios.get(`/products`, {
            params: {
                name_like: keyword,
            }
        });
    }

    const fetchCartItems = () => {
        return $axios.get(`/carts`);
    }

    const createCartItem = (cartItem) => {
        return $axios.post(`/carts`, cartItem)
    }

    return {
        fetchProductById,
        fetchProductsByKeyword,
        fetchCartItems,
        createCartItem,
    }
}