import React, {createContext, useState} from 'react';

export const BidContext = createContext();

const BidContextProvider = (props) => {
    const [bids, setBids] = useState([]);
    const addBid = (BudID, Summa, AuktionID, Budgivare) => {
        setBids([...bids, {BudID, Summa, AuktionID, Budgivare}]);
    }
    return(
        <BidContext.Provider value={bids, addBid}>
            { props.children }
        </BidContext.Provider>
    )
}

export default BidContextProvider;