import React, {useEffect} from 'react';
import classes from './ActiveAuction.css';

export default function AuctionInfo({auction, price, status}) {
    //console.log(auction.StartDatum);
    let yyyy = auction.StartDatum.substring(0, 4);
    let mm = auction.StartDatum.substring(5, 7);
    let dd = auction.StartDatum.substring(8, 10);
    let displayStart = dd + "/" + mm + "/" + yyyy;
    let displaySlut = auction.SlutDatum.substring(8, 10) + "/" + auction.SlutDatum.substring(5, 7) + "/" + auction.SlutDatum.substring(0, 4);
    return (
        <div>
            <table>
            <tr>
            <th>Titel</th>
            <th>Pris</th>
            <th>StartDatum</th>
            <th>SlutDatum</th>
            <th>Skapad av</th>
            <th>Beskrivning</th>
            <th>Status</th>
            
            </tr>
            </table> 
            <table>
            <tr>
            <td>{auction.Titel}</td>
            <td> {price} :-</td>
            <td> {displayStart}</td>
            <td> {displaySlut}</td>
            <td>{auction.Beskrivning}</td>
            <td>{auction.SkapadAv}</td>
            <td>{status}</td>
            </tr>
            </table>
            
        </div>
    )
}