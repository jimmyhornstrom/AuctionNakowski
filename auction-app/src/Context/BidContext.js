import React, {createContext, useState} from 'react';
import {GetBidData, AddBidData} from '../Repositorys/BidAPIRepository';

export const BidContext = createContext();

const BidContextProvider = (props) => {
    const testdata = [{BudID: 1, Summa: 10, AuktionID: 4604, Budgivare: "nolife"},{BudID: 2, Summa: 500, AuktionID: 4604, Budgivare: "meow"}];
    const [bids, setBids] = useState([]);//...testdata

    const addBid = (newBid) => {
        AddBidData(newBid);
        setBids([...bids, newBid]);
    }

    //denna metod sätter om bidden till den auktion som man är inne på
    //ska sättas när man klickar på knapp in till auktionsvyn
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