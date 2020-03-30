import React,{useState,useEffect} from 'react';
import classes from "./StartView.module.css";

const AuctionSearch = () =>{

let[auctionTitle, setAuctionTitle ] = useState();
let[error, setError] = useState(false);


function getAuction(e){

}   

return(

    <div>
        <input className={classes.search} type='text' placeholder='Sök...'/>
        <button className ={classes.button} onClick={() => setAuctionTitle(auctionTitle)}>Sök</button>
    </div>
)

}

export default AuctionSearch;
