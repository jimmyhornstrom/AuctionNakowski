import React from 'react';
import AuctionSearch from './AuctionSearch'
import AuctionList from './AuctionList'
import classes from "./StartView.module.css";

function StartView() {

  
  return (
    <body>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <div id={classes.startview}>
      <AuctionSearch/>
      <br></br>
      <table>
            <tr>
            <th>Titel</th>
            <th>Pris</th>
            <th>StartDatum</th>
            <th>SlutDatum</th>
            <th>Skapad av</th>
            <th></th>
            </tr>
            </table> 
      <AuctionList/>
    </div>
    </body>
   
  );
}

export default StartView;
