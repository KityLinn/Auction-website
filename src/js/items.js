import { urls } from "./module.mjs";

const logoutButton = document.querySelector("#logout");

logoutButton.addEventListener("click", (e) => {
    e.preventDefault()
    logoutFunc()
});


