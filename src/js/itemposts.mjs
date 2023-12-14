const itemHtml = 
`
  <div class="card text-center">
    <img class="image card-image" src="https://placehold.co/400?text=No+Image+Found"  alt="No Image Found">
    <h4 class="pt-3"><span class="card-title"></span></h4>
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

export const itemRender =  (data) => {
  let {title, id, seller, media, bids} = data;

  //lage DOM element som skal settes inn senere
  let container = document.createElement('div');
  container.classList.add("col-md-3")
  container.classList.add("col-sm-6")
  container.innerHTML = itemHtml;

  //henter steder hvor data skal settes inn i container 
  let cardImage = container.querySelector(".card-image");
  let cardTitle = container.querySelector(".card-title");
  let cardLink = container.querySelector(".card-link");
  let cardBid = container.querySelector(".card-bid");
  let cardBy = container.querySelector(".card-by");

  //setter inn data
  if (!media.length) {
    cardTitle.innerText = title
    cardLink.href = `../../singleitem.html?id=${id}`
    cardBid.innerText = bids[bids.length - 1].amount
    cardBy.innerText = `By: ${seller.name}`
    cardBy.href = `../../profile.html?user=${seller.name}`
    

  } else if (!bids.length) {
    cardTitle.innerText = title
    cardImage.src = media[0]
    cardImage.alt = title
    cardLink.href = `../../singleitem.html?id=${id}`
    cardBid.innerText = "None"
    cardBy.innerText = `By: ${seller.name}`
    cardBy.href = `../../profile.html?user=${seller.name}`

  } else {
    cardTitle.innerText = title
    cardImage.src = media[0]
    cardImage.alt = title
    cardBid.innerText = bids[bids.length - 1].amount
    cardLink.href = `../../singleitem.html?id=${id}`
    cardBy.innerText = `By: ${seller.name}`
    cardBy.href = `../../profile.html?user=${seller.name}`

  }
  return container
  };