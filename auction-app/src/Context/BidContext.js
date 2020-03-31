import React, {createContext, useState} from 'react';
import {GetBidData, AddBidData} from '../Repositorys/BidAPIRepository';

export const BidContext = createContext();

const BidContextProvider = (props) => {
    const testdata = [{BudID: 1, Summa: 10, AuktionID: 4604, Budgivare: "nolife"},{BudID: 2, Summa: 500, AuktionID: 4604, Budgivare: "meow"}];
    const [bids, setBids] = useState([]);//...testdata

    const addBid = (newBid) => {
        //TODO: skicka en post till apiet(repot) också
        AddBidData(newBid);
        setBids([...bids, newBid]);
    }

    //denna metod sätter om bidden till den auktion som man är inne på
    const setBidForAuction = (auctionID) => {
        let newBids = [];
        newBids = GetBidData(auctionID);
        setBids([...newBids]);
    }
    return(
        <BidContext.Provider value={{bids, addBid, setBidForAuction}}>
            { props.children }
        </BidContext.Provider>
    )
}

export default BidContextProvider;