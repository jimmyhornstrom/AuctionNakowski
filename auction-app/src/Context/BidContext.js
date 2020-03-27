import React, {createContext, useState} from 'react';
import GetBidData from '../Repositorys/BidAPIRepository';

export const BidContext = createContext();

const BidContextProvider = (props) => {
    const testdata = {BudID: 1, Summa: 10000, AuktionID: 4604, Budgivare: "nolife"};

    const [bids, setBids] = useState([testdata]);

    const addBid = (BudID, Summa, AuktionID, Budgivare) => {
        setBids([...bids, {BudID, Summa, AuktionID, Budgivare}]);
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