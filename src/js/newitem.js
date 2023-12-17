import { auctionUrls } from "./module.mjs";

const itemUrl1 = document.querySelector("#item-url-1");
const itemUrl2 = document.querySelector("#item-url-2");
const itemTitle = document.querySelector("#item-title")
const itemDesc = document.querySelector("#item-desc")
const itemTags = document.querySelector("#item-tags")
const itemExpire = document.querySelector("#item-expire")
const postItem = document.querySelector("#post-item")
const newError = document.querySelector("#new-error")

postItem.addEventListener("click", (e) => {
    e.preventDefault()
    const item = {
        title: itemTitle.value,
        description: itemDesc.value,
        tags:  [itemTags.value],
        media: [itemUrl1.value, itemUrl2.value],
        endsAt: itemExpire.value,
    };
    creaListing(auctionUrls.createEntry, item)
});


const creaListing = async (itemUrl, itemData) => {
    const token = localStorage.getItem("token");
    const res = await fetch (itemUrl, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(itemData),
    });
    const data = await res.json(); 
    console.log(data)
    if (data.errors) {
        errorFunc(data.errors, newError)

    } else {
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
