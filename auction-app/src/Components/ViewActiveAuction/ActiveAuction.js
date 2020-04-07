import React, {useEffect, useContext} from 'react';
import AuctionInfo from './AuctionInfo';
import BidList from './BidList';
import MakeBidForm from './MakeBidForm';
import { AuctionContext } from '../../Context/AuctionContext';
import { BidContext } from '../../Context/BidContext';
import BidInfo from './BidInfo';
import EmptyAuctionOptions from './EmptyAuctionOption';
import './ActiveAuction.css';

export default function ActiveAuction() {

    const {bids, setBidForAuction} = useContext(BidContext);
    const {auctions, getCurrentAuctionID, deleteAuction} = useContext(AuctionContext);
    
    useEffect(() => {setBidForAuction(getCurrentAuctionID());}, []);
    
    if(auctions.length > 0){
        let auction = auctions.find(a => {
            return a.AuktionID === getCurrentAuctionID(); 
        });

        const accuratePrice =  bids.length ? (Math.max.apply(Math, bids.map(function(bid) { return bid.Summa; }))) : (auction.Utropspris);
        const start = new Date(auction.StartDatum);
        const slut = new Date(auction.SlutDatum);
        const status = slut < new Date() || start > new Date() ? ("Avslutad") : ("Aktiv");

        let newbids = [...bids];
        newbids.sort(function(a, b){return  b.Summa-a.Summa });
        let highestBid = newbids[0];
        
        return (slut < new Date() || start > new Date()) && auctions.length ? (
            <div className="centerdiv">
                <AuctionInfo auction={auction} price={accuratePrice} status={status}/>
                {bids.length > 0 ? (<BidInfo bid={highestBid} />
                ) : (
                <div><h5>&nbsp;&nbsp;inga bud</h5><EmptyAuctionOptions auctionID={auction.AuktionID}/></div>
                )}
            </div>
        ) : (
            <div className="centerdiv">
                <AuctionInfo auction={auction} price={accuratePrice} status={status}/>
                <MakeBidForm highestBet={accuratePrice} auctionID={auction.AuktionID}/>
                <BidList auctionID={auction.AuktionID} />
            </div>
        )  }
    else{return(<p>loading...</p>)}
}