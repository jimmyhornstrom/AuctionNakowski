import React, {createContext, useState} from 'react';

export const AuctionContext = createContext();

const AuctionContextProvider = (props) => {
    const [auctions, setAuctions] = useState([]);

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