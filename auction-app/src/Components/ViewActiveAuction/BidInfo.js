import React from 'react'
import './ActiveAuction.css';

export default function BidInfo({bid}) {
    return (
        <tr>
            <td>{bid.Budgivare}</td>
            <td>{bid.Summa + ":-"}</td>
        </tr>
    )
}