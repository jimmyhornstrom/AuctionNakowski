import React, {useEffect} from 'react';
import Navbar from '../Navbar';
import AuctionInfo from './AuctionInfo';
import BidInfo from './BidInfo';
import BidList from './BidList';
import MakeBidForm from './MakeBidForm';

export default function ActiveAuction() {

    return (
        <React.Fragment>
            <Navbar />
            <AuctionInfo />
            <MakeBidForm />
            <BidList />
        </React.Fragment>
    )
}