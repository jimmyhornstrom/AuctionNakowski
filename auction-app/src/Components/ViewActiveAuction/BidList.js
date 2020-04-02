import React, {useContext} from 'react';
import BidInfo from './BidInfo';
import { BidContext } from '../../Context/BidContext';
import EmptyAuctionOption from './EmptyAuctionOption';
import './ActiveAuction.css';


export default function BidList({auctionID}) {

    const {bids} = useContext(BidContext);
    bids.sort(function(a, b){return  b.Summa-a.Summa });
    return bids.length > 0 ? (
    // <div className="smaller">
        <div className="bidtable">
            <table>
                <tr>
                    <th>Budgivare</th>
                    <th>Bud</th>
                </tr>
                {bids.map(bid => {
                    return( <BidInfo bid={bid} key={bid.BudID} /> );
                })}
            </table>
            </div>
    // </div>
    ) : (
            <React.Fragment>
                <div>Inga bud givna</div>
                <EmptyAuctionOption auctionID={auctionID} />
            </React.Fragment>
    )
}