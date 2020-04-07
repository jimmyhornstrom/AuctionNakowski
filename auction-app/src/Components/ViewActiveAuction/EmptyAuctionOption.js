import React, {useContext, useState} from 'react';
import { AuctionContext } from '../../Context/AuctionContext';
import UpdateForm from '../UpdateAction/UpdateForm';
import {NavLink} from 'react-router-dom';
import './ActiveAuction.css';

export default function EmptyAuctionOption({auctionID}) {
    const {deleteAuction} = useContext(AuctionContext);
    const [updateform, setUpdateFormHtml] = useState('');

    const updateAuction = (id) => {
        setUpdateFormHtml(<UpdateForm id={auctionID} />);
    }
    let deleteURL = "/";
    return (
            <React.Fragment>
                <button onClick={() => deleteAuction(auctionID)}><NavLink to={deleteURL}>Ta bort Auktionen</NavLink></button>
                <button onClick={() => updateAuction(auctionID)}> Uppdatera Auktionen</button>
                {updateform}
            </React.Fragment>
        )
}