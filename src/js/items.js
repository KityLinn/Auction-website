import { auctionUrls } from "./module.mjs";
import {itemRender} from "./itemposts.mjs";

export const fetchItems = async (url) => {
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
    let main = document.querySelector("#items");
    main.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        main.appendChild(itemRender(data[i]))
      }   
};

fetchItems(auctionUrls.listings(10))


