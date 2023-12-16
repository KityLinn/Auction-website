import { auctionUrls } from "./module.mjs";
import {loginFunc} from "./login.mjs";
import {regFunc} from "./register.mjs"


// login field data
const loginButton = document.querySelector("#login");
const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");

//register field data
const registerButton = document.querySelector("#reg-button");
const registerUser = document.querySelector("#reg-name");
const registerEmail = document.querySelector("#reg-email");
const registerPassword = document.querySelector("#reg-password");

//error fields
export const loginError = document.querySelector("#login-error")
export const regError = document.querySelector("#reg-error")

//login button
loginButton.addEventListener("click", (e) => {
    e.preventDefault()
    const userLogin = {
        email: loginEmail.value,
        password: loginPassword.value,
    };
    loginFunc(auctionUrls.login, userLogin, loginError)
});

//register button
registerButton.addEventListener("click", (e) => {
    e.preventDefault()
    const userReg = {
        name: registerUser.value,
        email: registerEmail.value,
        password: registerPassword.value,
    };
    regFunc(auctionUrls.register, userReg, regError)
})

