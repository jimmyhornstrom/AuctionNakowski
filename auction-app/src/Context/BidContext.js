import React, {createContext, useState} from 'react';
import {GetBidData, AddBidData} from '../Repositorys/BidAPIRepository';

export const BidContext = createContext();

const BidContextProvider = (props) => {
    const [bids, setBids] = useState([]);

    const addBid = (newBid) => {
        AddBidData(newBid);
        setBids([...bids, newBid]);
    }

    const setBidForAuction = (auctionID) => {
        (async() => {
            let newBids = [];
            setBids(newBids);
            newBids = await GetBidData(auctionID);
            setBids([...newBids]);
        })();
    }
    return(
        <BidContext.Provider value={{bids, addBid, setBidForAuction}}>
            { props.children }
        </BidContext.Provider>
    )
}

export default BidContextProvider;