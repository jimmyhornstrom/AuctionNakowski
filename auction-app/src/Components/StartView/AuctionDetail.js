import React, {useState, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import GetOldAuctions from '../ViewOldAuction/OldAuction';
import { AuctionContext } from '../../Context/AuctionContext';

//Skapar ett auction item
const AuctionItem = (props) => {

    const {auctions} = useContext(AuctionContext);

    const[testUrl, setUrl] = useState(0);

    //console.log(auctions);

    const handleClick = () => {
        if(auctions.length){
            auctions.forEach(a => {
                //console.log(element.AuktionID);
                if(a.AuktionID === props.auction.AuktionID){
                    console.log(a.AuktionID);
                    setUrl(a.AuktionID);
                    console.log(testUrl);
                }
                
            });
        }
    }

    

    {/*Ta bort idTest och lägg in  prop.auction.AuktionsID direkt i url*/}
    let idTest = 4604;
    let url = `details/${testUrl}`;

     
    // let url = `/details/${props.auction.AuktionID}`;
    // console.log("länken: "+url);

    

    //console.log(props.auction.AuktionID);

    let displayStart = props.auction.StartDatum.substring(8, 10) + "/" + props.auction.StartDatum.substring(5, 7) + "/" + props.auction.StartDatum.substring(0, 4);
    let displaySlut = props.auction.SlutDatum.substring(8, 10) + "/" + props.auction.SlutDatum.substring(5, 7) + "/" + props.auction.SlutDatum.substring(0, 4);
    
    
    return (<React.Fragment>
         <h3>{props.auction.Titel}</h3>
            <h4>pris: {props.auction.Utropspris} :-</h4>
            <p><i>från {displayStart} till {displaySlut}</i></p>
            <h5>Skapad av: {props.auction.SkapadAv}</h5>
            {/* tillagt */}
             <button onClick={() => handleClick()}><NavLink to={url}>Uppdatera</NavLink></button> 
    </React.Fragment>)
}

export default AuctionItem;