const BASE_URL = "https://api.noroff.dev/api/v1/";

export const auctionUrls = {
    login: BASE_URL + "auction/auth/login",
    register: BASE_URL + "auction/auth/register",
    editAvatar: (name) => BASE_URL + `/auction/profiles/${name}/media`,
    listings: (amount) => BASE_URL + `/auction/listings?limit=${amount}&_seller=true$_bids=true`,
    listing: (id) => BASE_URL + `/auction/listings/${id}?_seller=true$_bids=true`,
    createEntry: BASE_URL + `/auction/listings`,
    updateEntry: (id) => BASE_URL + `/auction/listings/${id}`,
    deleteEntry: (id) => BASE_URL + `/auction/listings/${id}`,
    makeBid: (id) => BASE_URL + `/auction/listings/${id}/bids`,
    allProfiles: BASE_URL + `/auction/profiles?_listings`,
    singleProfile: (name) => BASE_URL + `/auction/profiles/${name}`,
    singleProfilelistings: (name) => BASE_URL + `/auction/profiles/${name}/listings`,
    search: BASE_URL + `/auction/listings?_seller=true$_bids=true`,
  };

  