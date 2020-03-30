import React, {useContext, useState} from 'react'
import { AuctionContext } from '../../Context/AuctionContext'
   
const UpdateForm = (id) => {
    
const { updateAuction, auctions } = useContext(AuctionContext);

const [titel, setTitel] = useState('');
const [description, setDescription] = useState('');
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const [startBid, setStartBid] = useState(0);
const [createdBy, setCreatedBy] = useState('');


let currentAuction = auctions.find(auction => auction.AuktionID === id);
const SetNewAuctionValues = (e) => {
    e.preventDefault();

    const auctionWithNewValues = {
        AuktionID: currentAuction.AuktionID,
        Titel: titel,
        Beskrivning: description,
        StartDatum: startDate,
        SlutDatum: endDate,
        Gruppkod: currentAuction.Gruppkod,
        Utropspris: startBid,
        SkapadAv: createdBy
    };
    
    //validering för slut/startdatum/tomma fält?

    updateAuction(auctionWithNewValues);
}

   
return(  
    <form onSubmit={SetNewAuctionValues}>
        <label>Titel</label>
        <input type="text" placeholder={currentAuction.title} onChange={(e) => setTitel(e.target.value)}></input>
        <label>Beskrivning</label>
        <input type="text" placeholder={currentAuction.beskrivning} onChange={(e) => setDescription(e.target.value)}></input>
        <label>StartDatum</label>
        <input type="datetime-local" placeholder={currentAuction.startdatum} onChange={(e) => setStartDate(e.target.value)}></input>
        <label>SlutDatum</label>
        <input type="datetime-local" placeholder={currentAuction.slutdatum} onChange={(e) => setEndDate(e.target.value)}></input>
        <label>Utropspris</label>
        <input type="number" placeholder={currentAuction.utropspris} onChange={(e) => setStartBid(e.target.value)}></input>
        <label>Skapad av</label>
        <input type="text" placeholder={currentAuction.skapadav} onChange={(e) => setCreatedBy(e.target.value)}></input>
        <button type="submit">Spara</button>
    </form>
    );
}
export default UpdateForm;