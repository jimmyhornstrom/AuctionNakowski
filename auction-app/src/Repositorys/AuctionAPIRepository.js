
async function fetchAllAuctions(){
    let auctions = [];
    let url = "http://nackowskis.azurewebsites.net/api/Auktion/2210";
    await fetch(url)
        .then(res => res.json())
        .then(data => {
            auctions = data;
        })
    return auctions;
}

const postAuctionToApi = (auction) => {
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

const deleteAuctionFromApi = (auction) => {

    let url = "http://nackowskis.azurewebsites.net/api/Auktion/2210";
    fetch(url,{
        method: 'DELETE',
        body: JSON.stringify(auction),
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }
    });
}

const updateAuction = (auction) =>{
    
    let url = "http://nackowskis.azurewebsites.net/api/Auktion/2210";
    fetch(url,{
        method: 'PUT',
        body: JSON.stringify(auction),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    });    
}


export {fetchAllAuctions, postAuctionToApi, deleteAuctionFromApi, updateAuction};