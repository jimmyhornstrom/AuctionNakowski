import React, {useEffect, useState, useContext} from 'react';
import { BidContext } from '../../Context/BidContext';
import { AuctionContext } from '../../Context/AuctionContext';

export default function MakeBidForm({highestBet, auctionID}) {

    
    const {auctions} = useContext(AuctionContext);
    const {addBid} = useContext(BidContext);

    const [newBid, setNewBid] = useState(highestBet + 1);
    const [bidder, setBidder] = useState('');

    const SubmitNewBid = (e) => {
        e.preventDefault();
        console.log("budet är taget som " + newBid + ":- från " + bidder);
        console.log(auctions);
    }

    return (
        <React.Fragment>
            <form onSubmit={SubmitNewBid} >
                <label>Ditt bud</label>
                <input type="number" min={highestBet +1} value={newBid} onChange={(e) => setNewBid(e.target.value)} required />
                <label>Budgivare</label>
                <input type="text" value={bidder} onChange={(e) => setBidder(e.target.value)} required />
                <input type="submit" value="Buda!"/>
            </form>
        </React.Fragment>
    )
}