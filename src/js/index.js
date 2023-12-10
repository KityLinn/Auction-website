import { auctionUrls } from "./module.mjs";
import {loginFunc} from "./login.js";
import {regFunc} from "./register.js"


// login field data
const loginButton = document.querySelector("#login");
const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");

//register field data
const registerButton = document.querySelector("#reg-button");
const registerUser = document.querySelector("#reg-name");
const registerEmail = document.querySelector("#reg-email");
const registerPassword = document.querySelector("#reg-password");

//login button
loginButton.addEventListener("click", (e) => {
    e.preventDefault()
    const userLogin = {
        email: loginEmail.value,
        password: loginPassword.value,
    };
    loginFunc(auctionUrls.login, userLogin)
});

//register button
registerButton.addEventListener("click", (e) => {
    e.preventDefault()
    const userReg = {
        name: registerUser.value,
        email: registerEmail.value,
        password: registerPassword.value,
    };
    regFunc(auctionUrls.register, userReg)
})

