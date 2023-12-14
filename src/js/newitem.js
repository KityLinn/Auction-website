import { auctionUrls } from "./module.mjs";

const itemUrl = document.querySelector("#item-url");
const itemTitle = document.querySelector("#item-title")
const itemDesc = document.querySelector("#item-desc")
const itemTags = document.querySelector("#item-tags")
const itemExpire = document.querySelector("#item-expire")
const postItem = document.querySelector("#post-item")

postItem.addEventListener("click", (e) => {
    e.preventDefault()
    const item = {
        title: itemTitle.value,
        description: itemDesc.value,
        tags: itemTags.value,
        media: itemUrl.value,
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
}