import React, {useEffect, useContext} from 'react';
import AuctionInfo from './AuctionInfo';
import BidList from './BidList';
import MakeBidForm from './MakeBidForm';

export default function ActiveAuction() {//{auction}

    //för test
    const auction = {
        "AuktionID": 4604,
        "Titel": "Hejhopp",
        "Beskrivning": "hehe",
        "StartDatum": "2019-04-28T00:00:00",
        "SlutDatum": "2019-04-30T00:00:00",
        "Gruppkod": 2210,
        "Utropspris": 4214,
        "SkapadAv": "Jimmy"}

    return (
        <React.Fragment>
            <AuctionInfo auction={auction}/>
            {/* <MakeBidForm /> */}
            <BidList auctionID={auction.AuktionID} />
        </React.Fragment>
    )
}