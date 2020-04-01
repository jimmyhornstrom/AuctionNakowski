import React, {useState, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import GetOldAuctions from '../ViewOldAuction/OldAuction';
import { AuctionContext } from '../../Context/AuctionContext';

//Skapar ett auction item
const AuctionItem = (props) => {

    // tanken är att sätta ett id i context för den auktion man är inne på (för att komma runt problemet att ta in en prop i Route...)
    // id ska sättas via metoden updateCurrentAuctionID som i sin tur uppdaterar 
    // både currentAuctionID och getCurrentAuctionID ska göra samma sak. (ingen ska användas här. Används enbart för felsökning)  
    // getCurrentAuctionID är en funktion, men av någon anledning blir resultatet olika.
    // urrentAuctionID visas som undefined, trots att den updaterats, och dessutom satts med defaultvärde
    
    // Den här komponenten tycks funka enligt test (för att sätta id), men har problem att komma åt det korrekt via UpdateForm
    
    
    const {auctions, updateCurrentAuctionID, currentAuctionID, getCurrentAuctionID} = useContext(AuctionContext);
    
    //sätter id för att komma åt inne i UpdateForm
    //updateCurrentAuctionID(props.auction.AuktionID);   
    //test, visas som undefined
    //console.log('currentAuctionID innifrån auctionDetails: '+ currentAuctionID)
    //test, den här funkar
    //console.log('currentAuctionID via metod: '+ getCurrentAuctionID())
      


    const[testUrl, setUrl] = useState(0);
    
    const handleClick = () => {
        if(auctions.length){
            auctions.forEach(a => {
                //console.log(element.AuktionID);
                if(a.AuktionID === props.auction.AuktionID){
                    console.log('a.auktionid: '+a.AuktionID);
                    updateCurrentAuctionID(a.AuktionID); //uppdaterar inte direkt...
                    console.log(getCurrentAuctionID());
                }
                
            });
        }
    }
       
    // let url = `details/${testUrl}`;    //testUrl blir 0 när man loggar i consolen, trots att a.AuktionID i handleClick visar ett värde 
    let url = `details/${props.auction.AuktionID}`;
    let testurl = `details/${getCurrentAuctionID()}`;
    
    let displayStart = props.auction.StartDatum.substring(8, 10) + "/" + props.auction.StartDatum.substring(5, 7) + "/" + props.auction.StartDatum.substring(0, 4);
    let displaySlut = props.auction.SlutDatum.substring(8, 10) + "/" + props.auction.SlutDatum.substring(5, 7) + "/" + props.auction.SlutDatum.substring(0, 4);
    
    
    return (<React.Fragment>
         <h3>{props.auction.Titel}</h3>
            <h4>pris: {props.auction.Utropspris} :-</h4>
            <p><i>från {displayStart} till {displaySlut}</i></p>
            <h5>Skapad av: {props.auction.SkapadAv}</h5>
            {/* tillagt */}
             <button onClick={() => handleClick()}><NavLink to={testurl}>Uppdatera</NavLink></button> 
    </React.Fragment>)
}

export default AuctionItem;