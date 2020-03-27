import React, {useEffect, useContext} from 'react';
import AuctionInfo from './AuctionInfo';
import BidList from './BidList';
import MakeBidForm from './MakeBidForm';
import { AuctionContext } from '../../Context/AuctionContext';
import { BidContext } from '../../Context/BidContext';

export default function ActiveAuction() {//{auction}
    //vill ha en auktion ev auktionsID som inparameter
    //för test
    const auction = {
        "AuktionID": 4604,
        "Titel": "Hejhopp",
        "Beskrivning": "hehe",
        "StartDatum": "2019-04-28",
        "SlutDatum": "2019-04-30",
        "Gruppkod": 2210,
        "Utropspris": 4214,
        "SkapadAv": "Jimmy"}
    //

    const {bids} = useContext(BidContext);
    const accuratePrice =  bids.length ? (Math.max.apply(Math, bids.map(function(bid) { return bid.Summa; }))) : (auction.Utropspris);
    return (
        <React.Fragment>
            <AuctionInfo auction={auction} price={accuratePrice}/>
            <MakeBidForm highestBet={accuratePrice}/>
            <BidList auctionID={auction.AuktionID} />
        </React.Fragment>
    )
}