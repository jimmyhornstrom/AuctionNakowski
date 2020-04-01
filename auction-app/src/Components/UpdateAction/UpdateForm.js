import React, { useContext, useState, useEffect } from "react";
import { AuctionContext } from "../../Context/AuctionContext";
// import { useHistory } from "react-router-dom";


const UpdateForm = props => {

  // let history = useHistory();
  const { updateAuction, auctions } = useContext(AuctionContext);

  const [titel, setTitel] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startBid, setStartBid] = useState(0);
  const [createdBy, setCreatedBy] = useState("");
   
   let currentAuction = auctions.find(a => {
      return a.AuktionID === props.id;
    });
      
  const SetNewAuctionValues = e => {
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

    updateAuction(auctionWithNewValues);
  };

  return auctions.length ? (
      <form onSubmit={SetNewAuctionValues}><h1>test</h1>
        <label>Titel</label>
        <input type="text" placeholder={JSON.stringify(currentAuction.Titel)} onChange={(e) => setTitel(e.target.value)}></input>
        <label>Beskrivning</label>
        <input type="text" placeholder={currentAuction.Beskrivning} onChange={(e) => setDescription(e.target.value)}></input>
        <label>StartDatum</label>
        <input type="datetime-local" placeholder={currentAuction.StartDatum} onChange={(e) => setStartDate(e.target.value)}></input>
        <label>SlutDatum</label>
        <input type="datetime-local" placeholder={currentAuction.SlutDatum} onChange={(e) => setEndDate(e.target.value)}></input>
        <label>Utropspris</label>
        <input type="number" placeholder={currentAuction.Utropspris} onChange={(e) => setStartBid(e.target.value)}></input>
        <label>Skapad av</label>
        <input type="text" placeholder={currentAuction.SkapadAv} onChange={(e) => setCreatedBy(e.target.value)}></input>
        <button type="submit">Spara</button>
    </form>
  ) : (<p>loading...</p>)
};
export default UpdateForm;
