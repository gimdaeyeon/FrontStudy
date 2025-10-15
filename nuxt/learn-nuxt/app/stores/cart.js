export const useCartStore = defineStore('cart',()=>{
    const cartItems = ref([]);


    return {
        cartItems,
    }
});