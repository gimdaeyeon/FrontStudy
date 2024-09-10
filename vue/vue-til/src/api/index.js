import axios from "axios";
import {setInterceptors} from "@/api/common/interceptors";

function createInstance(){
    const instance = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
    });
    return setInterceptors(instance);
}
const instance = createInstance();


function registerUser(userData){
    return instance.post('users/signup',userData)
}

function loginUser(userData){
    return instance.post('users/login',userData)
}

function fetchPosts(){
    return instance.get('posts');
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData){
    return instance.post('posts',postData)
}

export {registerUser, loginUser,fetchPosts,createPost}






