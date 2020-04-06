import React,{useState,useEffect, useContext} from 'react';
import classes from "./StartView.module.css";
import { AuctionContext } from '../../Context/AuctionContext';
import AuctionItem from './AuctionDetail';

const AuctionList = () =>{

let[auctionId, setAuctionId ] = useState();
let[error, setError] = useState(false);
const {auctions, getCurrentAuctionID, searchResult} = useContext(AuctionContext);

var currentDate = new Date(Date.now());

console.log(auctions);

    if(auctions.length ){

        if(searchResult.length > 0){
            var list = searchResult.map(a => {
                return (<AuctionItem auction={a} key={a.AuktionID} />)
            })
        }
        else{
            let currentAuctions = auctions.filter(a => new Date(a.SlutDatum) > currentDate && currentDate > new Date(a.StartDatum));
            var list = currentAuctions.map(a => {
                return (<AuctionItem auction={a} key={a.AuktionID} />)
        })
        }
        console.log(getCurrentAuctionID());
  
        if(searchResult.length > 0){
        return searchResult[0].AuktionID !== 0 ? (
            <div>
                {list}
            </div>
            ) : (   
            <div><h3>Ingen matchning..</h3></div>   )
        }
        else{
            return(<React.Fragment>{list}</React.Fragment>);
        }
    } 
    else{
        return(<React.Fragment>hej</React.Fragment>);
    }
}
// else {return(<p>loading...</p>)}

// }

export default AuctionList;
