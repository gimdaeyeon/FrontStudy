// 로그인 회원 가입, 회원 탈퇴

import {instance} from "@/api/index";

function registerUser(userData){
    return instance.post('users/signup',userData)
}

function loginUser(userData){
    return instance.post('users/login',userData)
}

export {
    registerUser,
    loginUser,
}
