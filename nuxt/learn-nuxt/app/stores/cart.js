export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([]);

    function addCartItem(cartItem) {
        if (!cartItems.value.some(i => i.id === cartItem.id)) {
            cartItems.value.push(cartItem);
        }
    }

    return {
        cartItems, addCartItem,
    }
});