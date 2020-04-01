import React,{useState,useEffect, useContext} from 'react';
import classes from "./StartView.module.css";
import { AuctionContext } from '../../Context/AuctionContext';
import AuctionItem from './AuctionDetail';

const AuctionList = () =>{

let[auctionId, setAuctionId ] = useState();
let[error, setError] = useState(false);
const {auctions} = useContext(AuctionContext)
  
    let list =  auctions.map(a => { 
        return (<AuctionItem auction={a} key={a.AuktionID} />)})
return(
    <div>
        {list}
    </div>
)}

export default AuctionList;
