import React,{useState,useEffect, useContext} from 'react';
import classes from "./StartView.module.css";
import { AuctionContext } from '../../Context/AuctionContext';



const AuctionList = () =>{

let[auctionId, setAuctionId ] = useState();
let[error, setError] = useState(false);
const {auctions} = useContext(AuctionContext)

console.log(auctions);

function getList(e){


}   

return(

    <div>
        <p>{JSON.stringify(auctions)}hej hej</p>
        
       
    </div>
)

}

export default AuctionList;
