export const singleRender = (data, singleData) => {

    let {title, description, endsAt, id, media, seller, bids} = data;
    singleData.itemTitle.innerText = title;
    singleData.itemDescription.innerText = description;
    singleData.itemBy.innerText =seller.name
    if (!bids.length) {
        singleData.itemBid.innerText= "None"
    }
    else {
        singleData.itemBid.innerText= bids[bids.length - 1].amount

    }
    singleData.itemEnds.innerText = endsAt.substring(0, 10)
    if (!media.length) {
        singleData.image.src = "https://placehold.co/400?text=No+Image+Found"
    }
    else {
        singleData.image.src = media[0]
    }
    image.alt = title
    if (bids.length = 0) {
        bidsAppend.innerText = ""

    } else {
        for (let i = 0; i < bids.length; i++) {
            bidsAppend.appendChild(bidRender(bids[i]))   
          }
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