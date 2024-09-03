import axios from "axios";


function registerUser(userData){
    const url = `http://localhost:10000/api/users/signup`
    console.log(userData)
    return axios.post(url, userData)
}


export {registerUser}






