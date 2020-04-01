import React, {useContext, useState} from 'react';
import { AuctionContext } from '../Context/AuctionContext';

import {NavLink} from 'react-router-dom';
import '../form.css';


const AuctionPage = () => {
 
const { auctions } = useContext(AuctionContext);

    return (
      <React.Fragment>
        {auctions.map((auction) => (
          <h5 key={auction.AktionID}>
            <NavLink to={`/details/${auction.AktionID}`}>Uppdatera {auction.AktionID}</NavLink>
          </h5>
        ))}
      </React.Fragment>
    );
  };
  export default AuctionPage;