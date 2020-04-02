
import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import { AuctionContext } from '../Context/AuctionContext';

const Navbar = () => {
//ViewActiveAuction/ActiveAuction
    const {auctions, addAuctionsToSearchResult} = useContext(AuctionContext);
    return(
        <React.Fragment>
        <nav>
           
            <ul className="navbarStyle">    
           
                <li><NavLink to="/" onClick={() => {addAuctionsToSearchResult([])}}>Hem</NavLink></li>
                <li><NavLink to='/skapa'>Skapa ny auktion</NavLink></li>
                <li><NavLink to="/arkiv">Avslutade auktioner</NavLink></li>
            </ul>            
        </nav>      
        </React.Fragment>
    );

};

export default Navbar;        
 