
const fetchAllAuctions = () =>{
    let auctions = []
    let url = "http://nackowskis.azurewebsites.net/api/Auktion/2210";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        auctions = data;
    })
    return auctions;

}

const postAuction = (auction) => {
    let url = "http://nackowskis.azurewebsites.net/api/Auktion/2210";

    fetch(url,{
                method: 'POST',
                body: JSON.stringify(auction),
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                }
                });
}


export {fetchAllAuctions, postAuction};