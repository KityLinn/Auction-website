const logoutButtons = document.querySelectorAll(".logout");

export const logoutFunc = ( ) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "../../index.html"
}

logoutButtons.forEach(function(button) {
    button.addEventListener("click", function(e) {
      e.preventDefault()
      logoutFunc()
    });
  });