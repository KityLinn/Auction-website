export const itemRender =  (data) => {
    let {title, id, seller, media} = data;
    return `<div class="col-md-3 col-sm-6">
    <div class="card text-center">
    <img class="image" src="${media[0]}"  alt="${title}">
      <h4 class="pt-3">${title}</h4>
      <div class="row">
        <div class="col-md-6 col-sm-6">
          <a href="../../singleitem.html?id=${id}" role="button" class="btn btn-link text-black">View Item</a>
        </div>
        <div class="col-md-6 col-sm-6">
          <p class="p6">Current Bid: 50</p>
        </div>
        <a class="p5" href="">By: ${seller.name}</a>
      </div>
    </div>
  </div>`
 }