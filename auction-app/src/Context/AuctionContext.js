import React, {createContext, useState} from 'react';

export const AuctionContext = createContext();

const AuctionContextProvider = (props) => {
    const [auctions, setAuctions] = useState([]);
    const addAuction = (BudID, Summa, AuktionID, Budgivare) => {
        setAuctions([...auctions, {BudID, Summa, AuktionID, Budgivare}]);
    }
    return(
        <AuctionContext.Provider value={auctions, addAuction}>
            { props.children }
        </AuctionContext.Provider>
    )
}

export default AuctionContextProvider;