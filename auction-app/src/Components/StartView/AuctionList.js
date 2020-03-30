import React,{useState,useEffect, useContext} from 'react';
import classes from "./StartView.module.css";
import { AuctionContext } from '../../Context/AuctionContext';
import AuctionItem from './AuctionDetail';



const AuctionList = () =>{

let[auctionId, setAuctionId ] = useState();
let[error, setError] = useState(false);
const {auctions} = useContext(AuctionContext)



function getList(e){

}   

    let list =  auctions.map(a => { console.log(a + "hej")
        return (<AuctionItem auction={a} />)})
   
return(

    <div>
        {list}
        <p>{JSON.stringify(auctions)}hej hej</p>
        
       
    </div>
)

}

export default AuctionList;
