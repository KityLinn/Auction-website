const getHighestBidFromArray = (bids) => {
    var bid = bids[0];
    for (var b of bids) {
      if (bid.amount < b.amount) {
        bid = b;
      }
    }
    return bid;
  }

export const singleRender = (data, singleData) => {

    let {title, description, endsAt, id, media, seller, bids} = data;

    singleData.itemTitle.innerText = title;
    singleData.itemDescription.innerText = description;
    singleData.itemBy.innerText =seller.name
    if (!bids.length) {
        singleData.itemBid.innerText= "None"
    }
    else {
        singleData.itemBid.innerText= getHighestBidFromArray(bids).amount

    }
    singleData.itemEnds.innerText = endsAt.substring(0, 10)
    if (!media.length) {
        singleData.imgContainer.innerHTML = `<div class="carousel-item active">
        <img src="https://placehold.co/400?text=No+Image+Found" class="d-block w-100" alt="placeholder">
      </div>`
    }
    else {
        sliderRender(media, singleData.imgContainer) 
    }
    if (!bids.length) {
        singleData.bidsAppend.innerText = ""

    } else {
        for (let i = 0; i < bids.length; i++) {
            singleData.bidsAppend.appendChild(bidRender(bids[i]))   
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

const sliderRender = (media, container) => {
    const imgHtml = `<div class="carousel-item">
    <img src="" class="d-block w-100" alt="">
  </div>`

media.forEach((img) => {
let elem = document.createElement("div");
elem.innerHTML = imgHtml;
elem.querySelector("img").src = img;
container.appendChild(elem.childNodes[0]);
});
container.querySelectorAll(".carousel-item")[0].classList.add("active");

const carousel = new bootstrap.Carousel('#myCarousel');

}