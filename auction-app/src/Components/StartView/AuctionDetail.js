import React from 'react';

//Skapar ett auction item
const AuctionItem = (props) => {

    return (<React.Fragment>
         <h3>{props.auction.Titel}</h3>
            <h4>pris: {props.auction.Utropspris} :-</h4>
            <p><i>från {props.auction.StartDatum} till {props.auction.SlutDatum}</i></p>
            <h5>Skapad av: {props.auction.SkapadAv}</h5>
    </React.Fragment>)
}

export default AuctionItem;