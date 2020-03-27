import React, {createContext, useState} from 'react';

export const AuctionContext = createContext();

const AuctionContextProvider = (props) => {
    const [bids, setBids] = useState([]);
    const addAuction = (BudID, Summa, AuktionID, Budgivare) => {
        setAuctions([...bids, {BudID, Summa, AuktionID, Budgivare}]);
    }
    return(
        <AuctionContext.Provider value={bids, addBid}>
            { props.children }
        </AuctionContext.Provider>
    )
}

export default AuctionContextProvider;