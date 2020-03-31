import React, {createContext, useState, useEffect} from 'react';
import {fetchAllAuctions} from '../Repositorys/AuctionAPIRepository';
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

    const addAuctions = (auctionArray) => {

        // let oldarr = auctions;
        // oldarr.push(auction);
        // setAuctions(oldarr);

        setAuctions([...auctions, ...auctionArray]);

        // let newauctionarr = [...auctions, {AuktionID: auction.AuktionID, Titel: auction.Titel, Beskrivning: auction.Beskrivning, StartDatum: auction.StartDatum, SlutDatum: auction.SlutDatum, Gruppkod: auction.Gruppkod, Utropspris: auction.Utropspris, SkapadAv: auction.SkapadAv}];
        // setAuctions(newauctionarr);
    }
    const addOneAuction = (singleAuction) => {
        setAuctions([...auctions, singleAuction]);
    }
    const removeAuction = (id) => {
        //tar bara bort i context just nu, behöver ta bort i db också
        setAuctions(auctions.filter(auction => auction.AuktionID !== id));
    }

    const fetchAuctions = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            addAuctions(data);
            // for (var auction of data)
            // {
            //     addAuction(auction);
            // }
        })

    }

    useEffect(() => {
        fetchAuctions();
        // console.log(fetchAllAuctions()); tom array........
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
                    addOneAuction(auction)
                   });
    }

    const updateAuction = (auction) =>{
        //in progress 
        let otherAuctions = auctions.filter((a) => {
            return auction.AuktionID !== a.id;
        });
        setAuctions(...otherAuctions, auction);
        
        console.log(auctions);
    //     fetch('http://example.com/api/xxxxxxxxxxxxxxxx' + id, {
    //     method: 'POST',
    //     body: auction
    // }).then(response => response.json())
        
        // + lägg till uppdatering av api(inte bara state). postAuction?
        // hur gör man med "gamla" originalet om 
    }


    return(
        <AuctionContext.Provider value={{auctions, addAuctions, addOneAuction, removeAuction, postAuction, updateAuction}}>
            { props.children }
        </AuctionContext.Provider>
    )
}

export default AuctionContextProvider;