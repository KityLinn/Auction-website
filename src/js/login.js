export const loginFunc = async (loginUrl, userData) => { 
    const res = await fetch (loginUrl, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    const data = await res.json();
    console.log(data)
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("user", data.name)
    window.location.href = "./items.html"
}

