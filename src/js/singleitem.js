import { auctionUrls } from "./module.mjs";

const itemTitle = document.querySelector("#item-title");
const itemEnds = document.querySelector("#item-ends");
const itemBy = document.querySelector("#item-by");
const itemBid = document.querySelector("#item-bid");
const itemDescription = document.querySelector("#item-description")
const image = document.querySelector("#image");
const bidsAppend = document.querySelector("#bids")



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
    if (!bids.length) {
        itemBid.innerText="None"
    }
    else {
        itemBid.innerText= bids[bids.length - 1].amount

    }
    itemEnds.innerText = endsAt.substring(0, 10)
    if (!media.length) {
        image.src = "https://placehold.co/400?text=No+Image+Found"
    }
    else {
        image.src = media[0]
    }
    image.alt = title
    for (let i = 0; i < bids.length; i++) {
        bidsAppend.appendChild(bidRender(bids[i]))   
      }
}

const bidRender =  (bids) => {
    let container = document.createElement('div');
    container.classList.add("row");
    container.innerHTML = itemHtml;
    let bidName = container.querySelector(".bid-name");
    let bidValue = container.querySelector(".bid-value");
    bidName.innerText = bids.bidderName;
    bidValue.innerText= bids.amount;
    return container
 }

 const itemHtml = `
 <div class="col-6">
 <p class="p6"><span class="bid-name"></span></p>
</div>
<div class="col-6">
 <p class="p6">Bid: <span class="bid-value"></span></p>
</div>
</div>`;