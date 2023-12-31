const itemHtml = 
`
  <div class="card text-center">
    <img class="image card-image" src="https://placehold.co/400?text=No+Image+Found"  alt="No Image Found">
    <p class="pt-3 h4"><span class="card-title"></span></p>
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <a href="" role="button" class="btn btn-link text-black card-link">View Item</a>
      </div>
      <div class="col-md-6 col-sm-6">
        <p class="p6">Current Bid: <span class="card-bid"></span></p>
      </div>
      <a class="p5 card-by" href=""></a>
    </div>
  </div>
`;

const getHighestBidFromArray = (bids) => {
  var bid = bids[0];
  for (var b of bids) {
    if (bid.amount < b.amount) {
      bid = b;
    }
  }
  return bid;
}

export const itemRender =  (data, token) => {
  let {title, id, seller, media, bids} = data;

  //lage DOM element som skal settes inn senere
  let container = document.createElement('div');
  container.classList.add("col-lg-3")
  container.classList.add("col-md-4")
  container.classList.add("col-sm-6")
  container.innerHTML = itemHtml;

  //henter steder hvor data skal settes inn i container 
  let cardImage = container.querySelector(".card-image");
  let cardTitle = container.querySelector(".card-title");
  let cardLink = container.querySelector(".card-link");
  let cardBid = container.querySelector(".card-bid");
  let cardBy = container.querySelector(".card-by");
  
  let highestBid = getHighestBidFromArray(bids)
  
  //setter inn data
  cardTitle.innerText = title
  cardLink.href = `./singleitem.html?id=${id}`
  cardBy.innerText = `By: ${seller.name}`
  if (!bids.length) {
    cardBid.innerText = "None"
  }
  else {
    cardBid.innerText = highestBid.amount
  }
  if(!media.length) {
    cardImage.src = "https://placehold.co/400?text=No+Image+Found"

  } else {
    cardImage.src = media[0]
    cardImage.alt = title
  }
  if (!token) {
    cardBy.href = ``
  } else {
    cardBy.href = `./profile.html?user=${seller.name}`

  }
  return container
  };

  /*
      cardTitle.innerText = title
    cardImage.src = media[0]
    cardImage.alt = title
    cardBid.innerText = bids[bids.length - 1].amount
    cardLink.href = `../../singleitem.html?id=${id}`
    cardBy.innerText = `By: ${seller.name}`
    cardBy.href = `../../profile.html?user=${seller.name}`
    */