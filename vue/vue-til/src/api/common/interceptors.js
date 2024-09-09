import {store} from "@/store";

export function setInterceptors(instance){
    instance.interceptors.request.use(
        function (config){
            config.headers.Authorization = `Bearer ${store.state.token}`;
            return config;
        },
        function (error){
            return error;
        }
    );

    instance.interceptors.response.use(
        function (response){
            return response;
        },
        function (error){
            return error;
        }
    );

    return instance;
}
// instance.interceptors.request.use();
