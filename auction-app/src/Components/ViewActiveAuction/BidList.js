import React, {useContext} from 'react';
import BidInfo from './BidInfo';
import { BidContext } from '../../Context/BidContext';
import { AuctionContext } from '../../Context/AuctionContext';


export default function BidList({auctionID}) {

    const {bids} = useContext(BidContext);
    const {removeAuction} = useContext(AuctionContext);

    return bids.length ? (<React.Fragment>
        <ul>
            {bids.map(bid => {
                return( <BidInfo bid={bid} key={bid.BudID} /> );
            })}
        </ul>
        </React.Fragment>) : (
            <React.Fragment>
                <div>Inga bud givna</div>
                <button onClick={() => removeAuction(auctionID)}>Ta bort Auktionen</button>
            </React.Fragment>
    )
}