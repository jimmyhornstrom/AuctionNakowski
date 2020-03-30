import React, {createContext, useState, useEffect} from 'react';

export const AuctionContext = createContext();

const AuctionContextProvider = (props) => {
    // const testData = {
    //     "AuktionID": 4604,
    //     "Titel": "Hejhopp",
    //     "Beskrivning": "hehe",
    //     "StartDatum": "2019-04-28T00:00:00",
    //     "SlutDatum": "2019-04-30T00:00:00",
    //     "Gruppkod": 2210,
    //     "Utropspris": 4214,
    //     "SkapadAv": "Jimmy"}

    const url = "http://nackowskis.azurewebsites.net/api/Auktion/2210";

    const [auctions, setAuctions] = useState([]);

    const addAuction = (auction) => {

        // let oldarr = auctions;
        // oldarr.push(auction);
        // setAuctions(oldarr);

        setAuctions([...auctions, ...auction]);

        // let newauctionarr = [...auctions, {AuktionID: auction.AuktionID, Titel: auction.Titel, Beskrivning: auction.Beskrivning, StartDatum: auction.StartDatum, SlutDatum: auction.SlutDatum, Gruppkod: auction.Gruppkod, Utropspris: auction.Utropspris, SkapadAv: auction.SkapadAv}];
        // setAuctions(newauctionarr);
    }
    const removeAuction = (id) => {
        //tar bara bort i context just nu, behöver ta bort i db också
        setAuctions(auctions.filter(auction => auction.AuktionID !== id));
    }

    const fetchAuctions = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            addAuction(data);
            // for (var auction of data)
            // {
            //     addAuction(auction);
            // }
        })

    }

    useEffect(() => {
        fetchAuctions();
    },[])

    const postAuction = (auction) => {

        fetch(url,{
                    method: 'POST',
                    body: JSON.stringify(auction),
                    headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                    }
                    }).then(function (data) {
                    addAuction(auction)
                   });
    }


    return(
        <AuctionContext.Provider value={{auctions, addAuction, removeAuction, postAuction}}>
            { props.children }
        </AuctionContext.Provider>
    )
}

export default AuctionContextProvider;