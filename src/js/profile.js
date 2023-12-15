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
const userImg = document.querySelector("#user-img");
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
    console.log(data)
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
    userImg.src = avatar

 };

const otherUser = (data) => {
    let {name, avatar, credits} = data;
    userName.innerText = name
    userCredits.innerText = `Total Credits: ${credits}`
    profile.innerText = `${name} Profile`
    userImg.src = avatar
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

const avatarButton = document.querySelector("#ad-avatar");
const imageURL = document.querySelector("#imageURL");

avatarButton.addEventListener("click", (e) => {
    e.preventDefault()
    const avatarImage = {
        avatar: imageURL.value

    }
    
    avatarFunc(auctionUrls.editAvatar(localUser), avatarImage)
});

const avatarFunc = async (avatarUrl, avatarData) => { 
    const token = localStorage.getItem("token");
    const res = await fetch (avatarUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(avatarData),
    });
    const data = await res.json();
    console.log(data)
}

