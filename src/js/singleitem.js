import { auctionUrls } from "./module.mjs";
import {singleRender} from "./singlerender.mjs"

const itemTitle = document.querySelector("#item-title");
const itemEnds = document.querySelector("#item-ends");
const itemBy = document.querySelector("#item-by");
const itemBid = document.querySelector("#item-bid");
const itemDescription = document.querySelector("#item-description")
const image = document.querySelector("#image");
const bidsAppend = document.querySelector("#bids")

let singleData = {itemTitle, itemEnds, itemBy, itemBid, itemDescription, image, bidsAppend}



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
	console.log(data)
    singleRender(data, singleData)
};

getsingleItem(auctionUrls.listing(ID))

