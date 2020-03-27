import React, {createContext, useState} from 'react';

export const AuctionContext = createContext();

const AuctionContextProvider = (props) => {
    const [auctions, setAuctions] = useState([]);
    const addAuction = (arrayWithAuctions) => {
        setAuctions([...bids, ...arrayWithAuctions]);
    }
    return(
        <AuctionContext.Provider value={auctions, addAuction}>
            { props.children }
        </AuctionContext.Provider>
    )
}

export default AuctionContextProvider;