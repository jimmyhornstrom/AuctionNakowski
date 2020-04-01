import React from 'react';
import {NavLink} from 'react-router-dom';

//Skapar ett auction item
const AuctionItem = (props) => {
    
    
    let url = `/details/${props.auction.AuktionID}`;
    console.log("länken: "+url);

    let displayStart = props.auction.StartDatum.substring(8, 10) + "/" + props.auction.StartDatum.substring(5, 7) + "/" + props.auction.StartDatum.substring(0, 4);
    let displaySlut = props.auction.SlutDatum.substring(8, 10) + "/" + props.auction.SlutDatum.substring(5, 7) + "/" + props.auction.SlutDatum.substring(0, 4);
    return (<React.Fragment>
         <h3>{props.auction.Titel}</h3>
            <h4>pris: {props.auction.Utropspris} :-</h4>
            <p><i>från {displayStart} till {displaySlut}</i></p>
            <h5>Skapad av: {props.auction.SkapadAv}</h5>
            {/* tillagt */}
             <button><NavLink to={url}>Uppdatera</NavLink></button> 
    </React.Fragment>)
}

export default AuctionItem;