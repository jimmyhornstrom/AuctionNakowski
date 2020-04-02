import React from 'react'
import './ActiveAuction.css';

export default function BidInfo({bid}) {
    return (
        // <li>
        //     <h4>{bid.Budgivare}</h4> <p>{"Budar " + bid.Summa + ":-"}</p>
        // </li>
        <tr>
            <td>{bid.Budgivare}</td>
            <td>{"Budar " + bid.Summa + ":-"}</td>
        </tr>
    )
}