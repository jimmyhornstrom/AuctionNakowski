import React, {useContext, useState} from 'react';
import { AuctionContext } from '../../Context/AuctionContext';
import UpdateForm from '../UpdateAction/UpdateForm';


export default function EmptyAuctionOption({auctionID}) {
    const {removeAuction} = useContext(AuctionContext);
    const [updateform, setUpdateFormHtml] = useState('');

    const updateAuction = (id) => {
        setUpdateFormHtml(<UpdateForm id={auctionID} />);
    }
    return (
            <React.Fragment>
                <button onClick={() => removeAuction(auctionID)}>Ta bort Auktionen</button>
                <button onClick={() => updateAuction(auctionID)}>Uppdatera Auktionen</button>
                {updateform}
            </React.Fragment>
        )
}