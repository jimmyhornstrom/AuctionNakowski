import React, {useEffect} from 'react';
import './ActiveAuction.css';

export default function AuctionInfo({auction, price, status}) {
    //console.log(auction.StartDatum);
    let yyyy = auction.StartDatum.substring(0, 4);
    let mm = auction.StartDatum.substring(5, 7);
    let dd = auction.StartDatum.substring(8, 10);
    let displayStart = dd + "/" + mm + "/" + yyyy;
    let displaySlut = auction.SlutDatum.substring(8, 10) + "/" + auction.SlutDatum.substring(5, 7) + "/" + auction.SlutDatum.substring(0, 4);
    return (
        <div className="smaller">
            <h1>{status}</h1>
            <p><i>från {displayStart} till {displaySlut}</i></p>
            <h3>{auction.Titel}</h3>
            <p>{auction.Beskrivning}</p>
            <h4>pris: {price} :-</h4>
            <h5>Skapad av: {auction.SkapadAv}</h5>
        </div>
    )
}