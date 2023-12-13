import { auctionUrls } from "./module.mjs";

const itemTitle = document.querySelector("#item-title");
const itemEnds = document.querySelector("#item-ends");
const itemBy = document.querySelector("#item-by");
const itemBid = document.querySelector("#item-bid");
const itemDescription = document.querySelector("#item-description")
const image = document.querySelector("#image");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const ID = params.get("id");

const getsingleItem = async (url) => { 
    const token = localStorage.getItem("token");
    const res = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
    const data = await res.json();
    singleRender(data)
    console.log(data)
};

getsingleItem(auctionUrls.listing(ID))

const singleRender = (data) => {
    let {title, description, endsAt, id, media, seller, bids} = data;
    itemTitle.innerText = title;
    itemDescription.innerText = description;
    itemBy.innerText =seller.name
    itemBid.innerText= bids[bids.length - 1].amount
    itemEnds.innerText = endsAt.substring(0, 10)
    image.src = media[0]
    image.alt = title
}