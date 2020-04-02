import React, {useEffect, useContext} from 'react';
import AuctionInfo from './AuctionInfo';
import BidList from './BidList';
import MakeBidForm from './MakeBidForm';
import { AuctionContext } from '../../Context/AuctionContext';
import { BidContext } from '../../Context/BidContext';
import BidInfo from './BidInfo';

export default function ActiveAuction() {//{auction}
    //vill ha en auktion ev auktionsID som inparameter
    //för test
    // let auction = {
    //     "AuktionID": 4700,
    //     "Titel": "Papegojja",
    //     "Beskrivning": "En knäpp papegojja som säger 'impo no baka' som betyder inkopetens idiot på japanska.. Grannarna har börjat klaga på att han sjunger sydafrikas nationalsång klockan 5 på morgonen.. Han gillar fisk men bara om de är lila. Ge han inte kaffe för då äter han upp dina kakor i frysen. ehnm... sa jag att han kan prata?",
    //     "StartDatum": "2019-04-28",
    //     "SlutDatum": "2020-04-30",
    //     "Gruppkod": 2210,
    //     "Utropspris": 500,
    //     "SkapadAv": "Arrr"}

    
    
    const {bids, setBidForAuction} = useContext(BidContext);
    const {auctions, getCurrentAuctionID} = useContext(AuctionContext);
    useEffect(() => {setBidForAuction(getCurrentAuctionID());}, []);
    
    if(auctions.length > 0){
        let auction = auctions.find(a => {
        //console.log('Id via funktion i updateform: '+getCurrentAuctionID());
            return a.AuktionID === getCurrentAuctionID(); 
        });
        //this.props.match.params.id för routeparameter

        let wb = auctions.filter(a => a.AuktionID === getCurrentAuctionID());
        //let auction = wb[0];

        const accuratePrice =  bids.length ? (Math.max.apply(Math, bids.map(function(bid) { return bid.Summa; }))) : (auction.Utropspris);
        const start = new Date(auction.StartDatum);
        const slut = new Date(auction.SlutDatum);
        const status = slut < new Date() || start > new Date() ? ("Auktionen är stängd") : ("Auktionen är öppen");
        //console.log(new Date());
        let newbids = [...bids];
        newbids.sort(function(a, b){return  b.Summa-a.Summa });
        let highestBid = newbids[0];
        return (slut < new Date() || start > new Date()) && auctions.length ? (
            <React.Fragment>
                <AuctionInfo auction={auction} price={accuratePrice} status={status}/>
                {bids.length > 0 ? (<BidInfo bid={highestBid} />) : ("inga bud")}
            </React.Fragment>
        ) : (
            <React.Fragment>
                <AuctionInfo auction={auction} price={accuratePrice} status={status}/>
                <MakeBidForm highestBet={accuratePrice} auctionID={auction.AuktionID}/>
                <BidList auctionID={auction.AuktionID} />
            </React.Fragment>
        )  }
    else{return(<p>loading...</p>)}
}