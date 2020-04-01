import React from 'react';
import {NavLink} from 'react-router-dom';

//Skapar ett auction item
const AuctionItem = (props) => {

    {/*Ta bort idTest och lägg in  prop.auction.AuktionsID direkt i url*/}
    let idTest = 4604;
    let url = `details/${idTest}`;

    return (<React.Fragment>
         <h3>{props.auction.Titel}</h3>
            <h4>pris: {props.auction.Utropspris} :-</h4>
            <p><i>från {props.auction.StartDatum} till {props.auction.SlutDatum}</i></p>
            <h5>Skapad av: {props.auction.SkapadAv}</h5>
            {/* tillagt */}
             <button><NavLink to={url}>Uppdatera</NavLink></button> 
    </React.Fragment>)
}

export default AuctionItem;