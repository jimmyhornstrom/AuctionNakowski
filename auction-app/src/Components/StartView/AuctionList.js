import React,{useState,useEffect, useContext} from 'react';
import classes from "./StartView.module.css";
import { AuctionContext } from '../../Context/AuctionContext';



const AuctionList = () =>{

let[aucitonId, setAuctionId ] = useState();
let[error, setError] = useState(false);
const {auctions} = useContext(AuctionContext)

function getList(e){


}   

return(

    <div>
        <p>hej hej</p>
    </div>
)

}

export default AuctionList;
