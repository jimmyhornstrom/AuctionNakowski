import React, {createContext, useState} from 'react';
import GetAPIData from '../Repositorys/BidAPIRepository';
import GetBidData from '../Repositorys/BidAPIRepository';

export const BidContext = createContext();

const BidContextProvider = (props) => {
    const [bids, setBids] = useState([]);
    const addBid = (BudID, Summa, AuktionID, Budgivare) => {
        setBids([...bids, {BudID, Summa, AuktionID, Budgivare}]);
    }

    //denna metod sätter om bidden till den auktion som man är inne på
    const setBidForAuction = (auctionID) => {
        let newBids = GetBidData(auctionID);
        setBids([...newBids]);
    }
    return(
        <BidContext.Provider value={bids, addBid, setBidForAuction}>
            { props.children }
        </BidContext.Provider>
    )
}

export default BidContextProvider;