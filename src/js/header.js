const localUser = localStorage.getItem("user");

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

const profileLink = document.querySelectorAll(".your-profile");

profileLink.forEach((item) => {
  item.href = `../../profile.html?user=${localUser}`;
});