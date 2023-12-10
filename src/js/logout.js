export const logoutFunc = async ( ) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "../../index.html"
}
