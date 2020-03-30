import React from 'react';

//Skapar ett auction item
const AuctionItem = (props) => {

    return (<React.Fragment>
         <h3>{auction.Titel}</h3>
            <h4>pris: {price} :-</h4>
            <p><i>från {auction.StartDatum} till {auction.SlutDatum}</i></p>
            <h5>Skapad av: {auction.SkapadAv}</h5>
    </React.Fragment>)
}

export default AuctionItem;