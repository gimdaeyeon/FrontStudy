import axios from "axios";

export default defineNuxtPlugin(()=>{
   const config = useRuntimeConfig();

    const instance = axios.create({
        baseURL: config.public.apiBaseUrl,
    })

    return {
        provide:{
            axios:instance,
        }
    }
});