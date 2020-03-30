
const fetchAuctions = () => {
    const url = "http://nackowskis.azurewebsites.net/api/Auktion/2210";
    fetch(url)
    .then(res => res.json())
    .then(auctions => {
        return auctions;
    })

}

const postAuction = (auction) => {
    const url = "http://nackowskis.azurewebsites.net/api/Auktion/2210";

    fetch(url,{
                method: 'POST',
                body: JSON.stringify(auction),
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                }
                });
}


export {fetchAuctions, postAuction};