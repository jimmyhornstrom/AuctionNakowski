import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './StartView/StartView';
import Create from './CreateAuction/CreateAuctionForm';
import Details from './StartView/AuctionDetail';
// import Arcive from './ViewOldAuction/OldAuction';

const Main = () => {

    return(<Switch>
        <Route  path="/" exact component={Home}/>
        {/* <Route path="/arkiv" component={Arcive}/> OBS en skapad  */}
        <Route path="/skapa" component={Create}/>
        <Route path="/details:id" component={Details}/>        
    </Switch>)
}
export default Main;
