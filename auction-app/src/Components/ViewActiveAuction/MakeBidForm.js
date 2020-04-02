import React, {useEffect, useState, useContext} from 'react';
import { BidContext } from '../../Context/BidContext';
import { AuctionContext } from '../../Context/AuctionContext';
import './ActiveAuction.css';

export default function MakeBidForm({highestBet, auctionID}) {

    const {addBid} = useContext(BidContext);

    const [newBid, setNewBid] = useState(highestBet + 1);
    const [bidder, setBidder] = useState('');

    const SubmitNewBid = (e) => {
        e.preventDefault();
        let bid = {Summa: newBid, AuktionID: auctionID, Budgivare: bidder};
        addBid(bid);
    }
    return (
        <React.Fragment>
            <form onSubmit={SubmitNewBid} className="makebidform" >
                <label>Ditt bud</label><br></br>
                <input className="forminputbid" type="number" min={highestBet +1} value={newBid} onChange={(e) => setNewBid(e.target.value)} required /><br></br>
                <label>Budgivare</label><br></br>
                <input className="forminputbid" type="text" value={bidder} onChange={(e) => setBidder(e.target.value)} required /><br></br>
                <input className="forminputbid" type="submit" value="Buda!"/>
            </form>
        </React.Fragment>
    )
}