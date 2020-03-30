import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './StartView/StartView';
import Create from './CreateAuction/CreateAuctionForm';
import Arcive from './ViewOldAuction/OldAuction';

const Main = () => {

    return(<Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/arkiv" component={Arcive}></Route>
        <Route path="/skapa" component={Create}></Route>
    </Switch>)
}
export default Main;