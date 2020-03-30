import React, {useEffect} from 'react'

export default function AuctionInfo({auction, price, status}) {

    return (
        <React.Fragment>
            <h1>{status}</h1>
            <h3>{auction.Titel}</h3>
            <h4>pris: {price} :-</h4>
            <p>{auction.Beskrivning}</p>
            <p><i>från {auction.StartDatum} till {auction.SlutDatum}</i></p>
            <h5>Skapad av: {auction.SkapadAv}</h5>
        </React.Fragment>
    )
}