import React from 'react'

export default function BidInfo({bid}) {
    return (
        <li>
            <h4>{bid.Budgivare}</h4> <p>{"Budar " + bid.Summa + ":-"}</p>
        </li>
    )
}