import React, {createContext, useState} from 'react';

export const AuctionContext = createContext();

const AuctionContextProvider = (props) => {
    const [auctions, setAuctions] = useState([]);
<<<<<<< HEAD
    const addAuction = (BudID, Summa, AuktionID, Budgivare) => {
        setAuctions([...auctions, {BudID, Summa, AuktionID, Budgivare}]);
=======
    const addAuction = (arrayWithAuctions) => {
        setAuctions([...bids, ...arrayWithAuctions]);
>>>>>>> 8333a252087ff6e2f86607170f92462dd0137ac8
    }
    return(
        <AuctionContext.Provider value={auctions, addAuction}>
            { props.children }
        </AuctionContext.Provider>
    )
}

export default AuctionContextProvider;