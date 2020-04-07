import React, {useContext} from 'react';
import { BidContext } from '../../Context/BidContext';
import './auctionInfo.css'

export default function AuctionInfo({auction, price, status}) {

    const {bids} = useContext(BidContext);
    
    let yyyy = auction.StartDatum.substring(0, 4);
    let mm = auction.StartDatum.substring(5, 7);
    let dd = auction.StartDatum.substring(8, 10);
    let displayStart = dd + "/" + mm + "/" + yyyy;
    let displaySlut = auction.SlutDatum.substring(8, 10) + "/" + auction.SlutDatum.substring(5, 7) + "/" + auction.SlutDatum.substring(0, 4);
    return (
        <div> 
            <table>
                <tr>
                    <th>Utropspris</th>
                    <th>StartDatum</th>
                    <th>SlutDatum</th>
                    <th>Säljare</th>
                    <th>Status</th>
                </tr>
            </table> 
            <table>
                <tr>
                    <td> {auction.Utropspris} </td>
                    <td> {displayStart}</td>
                    <td> {displaySlut}</td>
                    <td>{auction.SkapadAv}</td>
                    <td>{status}</td>
                </tr>
            </table>
            <div className="decsription">
                <h3>{auction.Titel}</h3>
                <p>{auction.Beskrivning}</p>
                <br/>
                {bids.length<1 ? <h4>Inga bud</h4>: <h4> Nuvarande bud {price} kr</h4>}
           </div>       
        </div>
    )
}