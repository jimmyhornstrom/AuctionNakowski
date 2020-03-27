
//hämtar bud för en specifik auktion
const GetBidData = (auctionid) => {
    let url = "http://nackowskis.azurewebsites.net/api/Bud/2210/" + auctionid;
    let bids = [];
    fetch(url).then(res => res.json()).then(function (data) {
            bids= data;
            return bids;
       });
}

export default GetBidData;