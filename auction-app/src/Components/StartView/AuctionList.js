import React,{useState,useEffect, useContext} from 'react';
import classes from "./StartView.module.css";
import { AuctionContext } from '../../Context/AuctionContext';
import AuctionItem from './AuctionDetail';

const AuctionList = () =>{

let[auctionId, setAuctionId ] = useState();
let[error, setError] = useState(false);
const {auctions} = useContext(AuctionContext)

var currentDate = new Date(Date.now());

    if(auctions.length ){
        let currentAuctions = auctions.filter(a => new Date(a.SlutDatum) > currentDate);
        var list = currentAuctions.map(a => {
            return (<AuctionItem auction={a} key={a.AuktionID} />)
        })
    }
  
    
return(
    <div>
        {list}
    </div>
)} 
// else {return(<p>loading...</p>)}

// }

export default AuctionList;
