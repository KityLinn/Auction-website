import { logoutFunc } from "./logout.js";
const logoutButton = document.querySelector("#logout");

logoutButton.addEventListener("click", (e) => {
    e.preventDefault()
    logoutFunc()
});

console.log(logoutButton)