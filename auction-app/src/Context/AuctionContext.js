import React, {createContext, useState} from 'react';

export const AuctionContext = createContext();

const AuctionContextProvider = (props) => {
    const testData = {
        "AuktionID": 4604,
        "Titel": "Hejhopp",
        "Beskrivning": "hehe",
        "StartDatum": "2019-04-28T00:00:00",
        "SlutDatum": "2019-04-30T00:00:00",
        "Gruppkod": 2210,
        "Utropspris": 4214,
        "SkapadAv": "Jimmy"}

    const [auctions, setAuctions] = useState([testData]);

    const addAuction = (arrayWithAuctions) => {
        setAuctions([...auctions, ...arrayWithAuctions]);
    }
    const removeAuction = (id) => {
        //tar bara bort i context just nu, behöver ta bort i db också
        setAuctions(auctions.filter(auction => auction.AuktionID !== id));
    }
    return(
        <AuctionContext.Provider value={{auctions, addAuction, removeAuction}}>
            { props.children }
        </AuctionContext.Provider>
    )
}

export default AuctionContextProvider;