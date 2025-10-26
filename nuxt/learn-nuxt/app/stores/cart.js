import {getImageUrl} from "../util/index.js";
import {useApi} from "../composables/useApi.js";

export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([]);
    const {fetchCartItems} = useApi();

    function addCartItem(cartItem) {
        if (!cartItems.value.some(i => i.id === cartItem.id)) {
            cartItems.value.push(cartItem);
        }
    }

    async function initCarts() {
        const {data} = await fetchCartItems();
        cartItems.value = data.map(i => ({
            ...i,
            imageUrl: getImageUrl(i.id)
        }));
    }


    return {
        cartItems, addCartItem, initCarts,
    }
});