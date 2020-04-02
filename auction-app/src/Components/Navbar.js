
import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import { AuctionContext } from '../Context/AuctionContext';
import Logo from "../logo.png";

const Navbar = () => {
//ViewActiveAuction/ActiveAuction
    const {auctions, addAuctionsToSearchResult} = useContext(AuctionContext);
    return(
        <React.Fragment>
        <nav>
           
            <ul className="navbarStyle">    
            <img src={Logo} alt="logo" className="welcome--logo" /> 
                
                <li><NavLink to="/arkiv">Avslutade auktioner</NavLink></li>
                <li><NavLink to='/skapa'>Skapa ny auktion</NavLink></li>
                <li><NavLink to="/" onClick={() => {addAuctionsToSearchResult([])}}>Auktioner</NavLink></li>
            </ul>            
        </nav>      
        </React.Fragment>
    );

};

export default Navbar;        
 