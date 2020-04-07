import React,{useState, useContext} from 'react';
import classes from "./StartView.module.css";
import { AuctionContext } from '../../Context/AuctionContext';

const AuctionSearch = () =>{

let[searchInput, setSearchInput] = useState("");

const handleChange = val => {
    setSearchInput(val);
  }
    
const {auctions, addAuctionsToSearchResult} = useContext(AuctionContext);

const search = () => {
  let results = auctions.filter(item =>
  item.Titel.toLowerCase().includes(searchInput));  
    if(results.length < 1){
      results.push({AuktionID: 0});
    }
  addAuctionsToSearchResult(results);
  }

return (
    <div>
      <input className={classes.search}
          type="text"
          value={searchInput}
          placeholder="Sök auktion..."
          onChange={e => handleChange(e.target.value)} />
        <button className={classes.button} onClick={() => search()}>Sök</button>
    </div>
  )
}

export default AuctionSearch;
