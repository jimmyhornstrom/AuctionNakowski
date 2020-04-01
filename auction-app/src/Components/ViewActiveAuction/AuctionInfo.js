import React, {useEffect} from 'react'

export default function AuctionInfo({auction, price, status}) {
    console.log(auction.StartDatum);
    let yyyy = auction.StartDatum.substring(0, 4);
    let mm = auction.StartDatum.substring(5, 7);
    let dd = auction.StartDatum.substring(8, 10);
    let displayStart = dd + "/" + mm + "/" + yyyy;
    let displaySlut = auction.StartDatum.substring(8, 10) + "/" + auction.StartDatum.substring(5, 7) + "/" + auction.StartDatum.substring(0, 4);
    return (
        <React.Fragment>
            <h1>{status}</h1>
            <h3>{auction.Titel}</h3>
            <h4>pris: {price} :-</h4>
            <p>{auction.Beskrivning}</p>
            <p><i>från {displayStart} till {displaySlut}</i></p>
            <h5>Skapad av: {auction.SkapadAv}</h5>
        </React.Fragment>
    )
}