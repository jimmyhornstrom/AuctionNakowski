
import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
//ViewActiveAuction/ActiveAuction
    return(
        <React.Fragment>
        <nav>
            <ul className="navbarStyle">
                <li><NavLink to="/">Hem</NavLink></li>
                <li><NavLink to='/skapa'>Skapa ny auktion</NavLink></li>
                {/* <li><NavLink to="/ViewOldAuction/OldAuction">Avslutade auktioner</NavLink></li> */}
            </ul>            
        </nav>      
        </React.Fragment>
    );

};

export default Navbar;        
 