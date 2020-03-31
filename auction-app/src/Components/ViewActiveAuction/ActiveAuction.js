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
    const auction = {
        "AuktionID": 4604,
        "Titel": "Papegojja",
        "Beskrivning": "En knäpp papegojja som säger 'impo no baka' som betyder inkopetens idiot på japanska.. Grannarna har börjat klaga på att han sjunger sydafrikas nationalsång klockan 5 på morgonen.. Han gillar fisk men bara om de är lila. Ge han inte kaffe för då äter han upp dina kakor i frysen. ehnm... sa jag att han kan prata?",
        "StartDatum": "2019-04-28",
        "SlutDatum": "2019-04-30",
        "Gruppkod": 2210,
        "Utropspris": 500,
        "SkapadAv": "Arrr"}
    //let currentAuction = auctions.find(auction => auction.AuktionID === id);
    
    
    const {bids, setBidForAuction} = useContext(BidContext);


          //för att testa budens context, kan tas bort senare när vi byggt ihop programmet (nedåt)
            const testbid = () => {
                setBidForAuction(4604);
            }
            //(uppåt)




    const accuratePrice =  bids.length ? (Math.max.apply(Math, bids.map(function(bid) { return bid.Summa; }))) : (auction.Utropspris);
    const start = new Date(auction.StartDatum);
    const slut = new Date(auction.SlutDatum);
    const status = slut < new Date() || start > new Date() ? ("Auktionen är stängd") : ("Auktionen är öppen");

    let newbids = [...bids];
    newbids.sort(function(a, b){return  b.Summa-a.Summa });
    let highestBid = newbids[0];
    return slut < new Date() || start > new Date() ? (
        <React.Fragment>
            <AuctionInfo auction={auction} price={accuratePrice} status={status}/>
            {bids.length > 0 ? (<BidInfo bid={highestBid} />) : ("inga bud")}
        </React.Fragment>
    ) : (
        <React.Fragment>
            
            <AuctionInfo auction={auction} price={accuratePrice} status={status}/>
            <MakeBidForm highestBet={accuratePrice} auctionID={auction.AuktionID}/>
            <BidList auctionID={auction.AuktionID} />
            
            <button onClick={testbid}>testa att dra in buden från api, för test</button>
        </React.Fragment>
    )
}