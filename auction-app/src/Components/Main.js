import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './StartView/StartView';
import Create from './CreateAuction/CreateAuctionForm';
// import AuctionDetail from './StartView/AuctionDetail';
// import Arcive from './ViewOldAuction/OldAuction';
import UpdateForm from './UpdateAction/UpdateForm';
import ActiveAuction from './ViewActiveAuction/ActiveAuction';

const Main = () => {

    return(<Switch>
        <Route  path="/" exact component={Home}/>
        {/* <Route path="/arkiv" component={Arcive}/> OBS en skapad  */}
        <Route path="/skapa" component={Create}/>
        
        {/* <Route path="/details:id" component={AuctionDetail}/>         */}
        <Route path="/details" component={ActiveAuction}/>  
        <Route path="/uppdatera" component={UpdateForm}/>    
    </Switch>)
}
export default Main;
