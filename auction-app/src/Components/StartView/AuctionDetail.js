import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import { AuctionContext } from '../../Context/AuctionContext';
import classes from "./StartView.module.css";

const AuctionItem = (props) => {

    const {auctions, updateCurrentAuctionID, getCurrentAuctionID} = useContext(AuctionContext);

    const handleMouseOver= () => {
        if(auctions.length){
            auctions.forEach(a => {
                if(a.AuktionID === props.auction.AuktionID){
                    updateCurrentAuctionID(a.AuktionID);
                }
            });
        }
    }
    let url= `details/${getCurrentAuctionID()}`;
    let displayStart = props.auction.StartDatum.substring(8, 10) + "/" + props.auction.StartDatum.substring(5, 7) + "/" + props.auction.StartDatum.substring(0, 4);
    let displaySlut = props.auction.SlutDatum.substring(8, 10) + "/" + props.auction.SlutDatum.substring(5, 7) + "/" + props.auction.SlutDatum.substring(0, 4);
    return (<React.Fragment>
            <table> 
                <tr>
                    <td>{props.auction.Titel}</td>
                    <td>{props.auction.Utropspris} :-</td>
                    <td>{displayStart}</td>
                    <td>{displaySlut}</td>
                    <td>{props.auction.SkapadAv}</td>
                    <td> <button className={classes.detbutton} onMouseEnter={() => handleMouseOver()}>
                        <NavLink to={url} style={{ textDecoration: 'none', color: 'rgb(224, 222, 222)' }}>Detaljer</NavLink>
                        </button>
                    </td>
                </tr>    
            </table>
    </React.Fragment>)
}

export default AuctionItem;