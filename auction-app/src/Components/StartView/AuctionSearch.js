import React,{useState,useEffect, useContext} from 'react';
import classes from "./StartView.module.css";
import { AuctionContext } from '../../Context/AuctionContext';

const AuctionSearch = () =>{

let[searchInput, setSearchInput] = useState("");
let[error, setError] = useState(false);

const[sortedAuctions, setSortedAuctions] = useState([]);

//metod från context som tar emot en array och sparar i state
//const {addAuctionsToSearchResult} = useContext(AuctionContext);

const handleChange = val => {
    setSearchInput(val);
    console.log("value", val);}
    
const {auctions} = useContext(AuctionContext);

const search = () => {

  const results = auctions.filter(item =>
  item.Titel.toLowerCase().includes(searchInput));  
  setSortedAuctions(results);
  console.log(sortedAuctions);

  //lägger in resultat i context state (inte testat men det är iaf principen)
  //addAuctionsToSearchResult(results);
  
  }

return(

    <div>
    <label>Sök</label>
      <input
        type="text"
        value={searchInput}
        onChange={e => handleChange(e.target.value)}
      />
        <button className ={classes.button} onClick={() => search()}>Sök</button>

      
    </div>
)

}

export default AuctionSearch;
