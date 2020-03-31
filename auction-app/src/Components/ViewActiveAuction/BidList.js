import React, {useContext} from 'react';
import BidInfo from './BidInfo';
import { BidContext } from '../../Context/BidContext';
import EmptyAuctionOption from './EmptyAuctionOption';


export default function BidList({auctionID}) {

    const {bids} = useContext(BidContext);
    bids.sort(function(a, b){return  b.Summa-a.Summa });
    return bids.length > 0 ? (
    <React.Fragment>
        <ul>
            {bids.map(bid => {
                return( <BidInfo bid={bid} key={bid.BudID} /> );
            })}
        </ul>
        </React.Fragment>) : (
            <React.Fragment>
                <div>Inga bud givna</div>
                <EmptyAuctionOption auctionID={auctionID} />
            </React.Fragment>
    )
}