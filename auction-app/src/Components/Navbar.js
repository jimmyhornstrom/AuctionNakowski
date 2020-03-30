
import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {

    return(
        <React.Fragment>
        <nav>
            <ul className="navbarStyle">
                <li><NavLink to="./ViewActiveAuction/ActiveAuction">Hem</NavLink></li>
                <li><NavLink to='./CreateAuction/CreateAuctionForm'>Skapa ny auktion</NavLink></li>
                <li><NavLink to="./ViewOldAuction/OldAuction">Avslutade auktioner</NavLink></li>
            </ul>            
        </nav>      
        </React.Fragment>
    );

};

export default Navbar;