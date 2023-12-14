import { auctionUrls } from "./module.mjs";
import {profileItems} from "./profileposts.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const user = params.get("user");

document.title = user;

const localUser = localStorage.getItem("user");


const userName = document.querySelector("#user-name");
const userCredits = document.querySelector("#user-credits");
const profile = document.querySelector("#profile");
const addAvatar = document.querySelector("#add-avatar")

const getUser = async (url) => { 
    const token = localStorage.getItem("token");
    const res = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
    const data = await res.json();
    if (user === localUser) {
        loggedUser(data)
    } else {
        otherUser(data)

    }
};

getUser(auctionUrls.singleProfile(user))

const loggedUser = (data) => {
    let {name, avatar, credits} = data;
    userName.innerText = name
    userCredits.innerText = `Total Credits: ${credits}`
    profile.innerText = `Your Profile`

 };

const otherUser = (data) => {
    let {name, avatar, credits} = data;
    userName.innerText = name
    userCredits.innerText = `Total Credits: ${credits}`
    profile.innerText = `${name} Profile`
    addAvatar.classList = "d-none"
 };

 const getuserPosts = async (url) => { 
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
    let main = document.querySelector("#profile-listings");
    main.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        main.appendChild(profileItems(data[i]))
      }   
};

getuserPosts(auctionUrls.singleProfilelistings(user))