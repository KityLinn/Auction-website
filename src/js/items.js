import { auctionUrls } from "./module.mjs";
import {itemRender} from "./itemposts.mjs";

let page = 0;
let sortValue = "desc"

const token = localStorage.getItem("token");

// fetches 10 newest items in API
export const fetchItems = async (url, token) => {
  let offset = page * 10;
    const res = await fetch(url + "&offset=" + offset + "&sort=created" + "&sortOrder=" + sortValue, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }); 
    const data = await res.json();
    let main = document.querySelector("#items");
    main.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        main.appendChild(itemRender(data[i], token))
      }   
};

fetchItems(auctionUrls.listings(10), token)

//Sort by newest and oldest
let sorting = document.querySelector("#sorting")
sorting.addEventListener("change", (e) => {
  if (e.target.value == "desc") {
    sortValue = "desc";
    page = 0;
    fetchItems(auctionUrls.listings(10))
  }

  if (e.target.value == "asc" ) {
    sortValue = "asc";
    page = 0
    fetchItems(auctionUrls.listings(10))
    
  }
})

//Load more button. Loads 10 more items
const morePosts = document.querySelector("#more");
morePosts.addEventListener("click", (e) => {
  e.preventDefault();
  page++;
  fetchItems(auctionUrls.listings(10))

});