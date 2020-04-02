import React,{useState,useEffect, useContext} from 'react';
import classes from "./StartView.module.css";
import { AuctionContext } from '../../Context/AuctionContext';
import {NavLink} from 'react-router-dom';

const AuctionSearch = () =>{

let[searchInput, setSearchInput] = useState("");
let[error, setError] = useState(false);

const[sortedAuctions, setSortedAuctions] = useState([]);

//metod från context som tar emot en array och sparar i state (ist för ovanstående state)
//const {addAuctionsToSearchResult} = useContext(AuctionContext);

const handleChange = val => {
    setSearchInput(val);
    console.log("value", val);}
    
const {auctions, addAuctionsToSearchResult} = useContext(AuctionContext);

const search = () => {

    //SÖK FUNKAR!!!
    //det tar bara lite tid för state att få det, men den får det efter en millisekund! så console hinner skriva ut det som en tom array men det finns värde där sen.
    //så det är det som console.log(results) skriver ut som hamnar i state (i context nu)


  let results = auctions.filter(item =>
  item.Titel.toLowerCase().includes(searchInput));  
  //setSortedAuctions([...results]); console.log(sortedAuctions);
  console.log(results);
  //lägger in resultat i context state (inte testat men det är iaf principen)
  addAuctionsToSearchResult(results);
  }

return (

    <div>
    
      <input className={classes.search}
        type="text"
        value={searchInput}
        placeholder="Sök auktion..."
        onChange={e => handleChange(e.target.value)}
      />
        {/* <button className={classes.button} onClick={() => search()}>Sök</button> */}
        <button className={classes.button} onMouseEnter={() => search()}><NavLink to={'/sok'}>Sök</NavLink></button>        
    </div>
)

}

export default AuctionSearch;
