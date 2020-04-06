import React, { useContext, useState,  } from "react";
import { AuctionContext } from "../../Context/AuctionContext";
import '../../Components/form.css';
import {NavLink, useHistory, withRouter} from 'react-router-dom';


// const UpdateForm = props => {
const UpdateForm = ({id, history}) => {

  const { updateAuction, auctions, currentAuctionID, getCurrentAuctionID, addAuctionsToSearchResult } = useContext(AuctionContext);

  const [titel, setTitel] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startBid, setStartBid] = useState(0);
  const [createdBy, setCreatedBy] = useState("");

  //let history = useHistory();
   
  //  om man istället använder props
  //   let currentAuction = auctions.find(a => {
  //     return a.AuktionID === props.id;
  //   });
if(auctions.length > 0){

  let currentAuction = auctions.find(a => {
    //console.log('Id via funktion i updateform: '+getCurrentAuctionID());
        return a.AuktionID === getCurrentAuctionID(); 
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
    //history.goBack();
    //addAuctionsToSearchResult([...auctions]);
    history.push('/');
  };

  let url= `details/${getCurrentAuctionID()}`;


  return auctions.length ? (
    <div className="formContainer">
      <form onSubmit={SetNewAuctionValues}><h3>Uppdatera auktion</h3>
        <label>Titel</label>
        <br/>
        <input type="text" placeholder={currentAuction.Titel} onChange={(e) => setTitel(e.target.value)}></input>
        <br/>
        <label>Beskrivning</label>
        <br/>
        <textarea rows="10" cols="61" placeholder={currentAuction.Beskrivning} onChange={(e) => setDescription(e.target.value)}/>
        <br/>
        <label>StartDatum</label>
        <br/>
        <input type="datetime-local" placeholder={currentAuction.StartDatum} onChange={(e) => setStartDate(e.target.value)}></input>
        <br/>
        <label>SlutDatum</label>
        <br/>
        <input type="datetime-local" placeholder={currentAuction.SlutDatum} onChange={(e) => setEndDate(e.target.value)}></input>
        <br/>
        <label>Utropspris</label>
        <br/>
        <input type="number" placeholder={currentAuction.Utropspris} onChange={(e) => setStartBid(e.target.value)}></input>
        <br/>
        <label>Skapad av</label>
        <br/>
        <input type="text" placeholder={currentAuction.SkapadAv} onChange={(e) => setCreatedBy(e.target.value)}></input>
        <br/>

        <input type="submit" value="Spara"/>
    </form>
    </div>
  ) : (<p>loading...</p>)} 
  else {return(<p>loading...</p>)}
};
export default withRouter(UpdateForm);
