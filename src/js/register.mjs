export const regFunc = async (regUrl, userData) => { 
    const res = await fetch (regUrl, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    const data = await res.json();
    console.log(data)
}

