// api url
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address = document.querySelector('#address');

// user data
let user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */


/**
 *
 * @returns {Promise<User>}
 */
function fetchUser(){
    return axios.get(url);
}


function startApp() {
    fetchUser()
        .then(function (response) {
            console.log(response.data);
            user = response.data;
            // TODO: 이름, 이메일, 주소 표시하기
            username.innerText = user.name;
            email.innerText = user.email;
            address.innerText = user.address.street;
        })
        .catch(function (error) {
            console.log(error);
        });
}

startApp();