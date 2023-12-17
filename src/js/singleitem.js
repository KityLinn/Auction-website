import { auctionUrls } from "./module.mjs";
import {singleRender} from "./singlerender.mjs";

const token = localStorage.getItem("token");

const bidsButton = document.querySelector("#bid-button");
const bidAmount = document.querySelector("#bidamount");
const itemTitle = document.querySelector("#item-title");
const itemEnds = document.querySelector("#item-ends");
const itemBy = document.querySelector("#item-by");
const itemBid = document.querySelector("#item-bid");
const itemDescription = document.querySelector("#item-description")
const image = document.querySelector("#image");
const bidsAppend = document.querySelector("#bids")
let imgContainer = document.querySelector("#carousel-img-container")
const bidError = document.querySelector("#bid-error")
const bidSuccess = document.querySelector("#bid-success")



let queryData = {itemTitle, itemEnds, itemBy, itemBid, itemDescription, image, bidsAppend, imgContainer}

if (!token) {
    bidsButton.classList.add("d-none")
    bidAmount.classList.add("d-none")
}



const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const ID = params.get("id");

const getsingleItem = async (url) => { 
    const res = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
    const data = await res.json();
	console.log(data)
    singleRender(data, queryData)
};

getsingleItem(auctionUrls.listing(ID))


bidsButton.addEventListener("click", (e) => {
    e.preventDefault()
    const bid = {
        amount: parseFloat(bidAmount.value)

    }
    console.log(bid)
    adBid(auctionUrls.makeBid(ID), bid)
});

const adBid = async (bidUrl, bid) => { 
    const res = await fetch (bidUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bid),
    });
    const data = await res.json();
    if (data.errors) {
        errorFunc(data.errors, bidError)

    } else {
        bidSuccess.innerHTML = `<p">Bid Succesful!</p>`
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
