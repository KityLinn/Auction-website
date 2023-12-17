export const loginFunc = async (loginUrl, userData, error) => { 
    const res = await fetch (loginUrl, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    const data = await res.json();
    if (data.errors) {
        errorFunc(data.errors, error)

    } else {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("user", data.name)
        window.location.href = "./items.html"
    }

}


const errorFunc =  (data, attach) => {
    attach.innerHTML = ""
    let errorContainer = ""
    for (let i = 0; i < data.length; i++) {
        errorContainer += createError(data[i])
      }
      attach.innerHTML = errorContainer;

 }

 const createError = (data) => {
    return `<p id="error">${data.message}</p>`
}
