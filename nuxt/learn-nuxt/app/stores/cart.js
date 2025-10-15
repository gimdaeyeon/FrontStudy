export const useCartStore = defineStore('cart',()=>{
    const cartItems = ref([]);


    function addCartItem(cartItem){
        cartItems.value.push(cartItem);
    }

    return {
        cartItems,addCartItem,
    }
});