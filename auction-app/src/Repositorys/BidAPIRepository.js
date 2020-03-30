
//hämtar bud för en specifik auktion
const GetBidData = (auctionid) => {
    let url = "http://nackowskis.azurewebsites.net/api/Bud/2210/" + auctionid;
     let bids = [];
    fetch(url).then(res => res.json()).then(function (data) {
           
            bids= data;
            
       });return bids;
}

const AddBidData = (bid) => {
    //bid = {Summa: 10, AuktionID: props.aID, Budgivare: "hämtat från input"};

    let url = "http://nackowskis.azurewebsites.net/api/Bud/2210";
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(bid),
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }
        });
        
    //     .then(function (data) {
    //         console.log('Request success: ', 'posten skapad');
    //    })
}

export {GetBidData, AddBidData};