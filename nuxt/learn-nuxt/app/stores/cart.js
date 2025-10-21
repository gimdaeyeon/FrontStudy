import {fetchCartItems} from "../api/index.js";
import {getImageUrl} from "../util/index.js";

export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([]);

    function addCartItem(cartItem) {
        if (!cartItems.value.some(i => i.id === cartItem.id)) {
            cartItems.value.push(cartItem);
        }
    }

    async function FETCH_CART_ITEMS() {
        const {data} = await fetchCartItems();
        cartItems.value = data.map(i => ({
            ...i,
            imageUrl: getImageUrl(i.id)
        }));
    }

    return {
        cartItems, addCartItem, FETCH_CART_ITEMS
    }
});