const logoutButton = document.querySelector("#logout");

export const logoutFunc = async ( ) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "../../index.html"
}

logoutButton.addEventListener("click", (e) => {
    e.preventDefault()
    logoutFunc()
});
