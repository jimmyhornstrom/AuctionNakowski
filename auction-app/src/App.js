import React, {useContext} from 'react';
import './App.css';
// import Test from './Components/CreateAuction/test'
import BidContextProvider from './Context/BidContext';
import ActiveAuction from './Components/ViewActiveAuction/ActiveAuction';
import AuctionContextProvider from './Context/AuctionContext';
import CreateAuctionForm from './Components/CreateAuction/CreateAuctionForm';
// import StartView from './Components/StartView/StartView'
//import StartView from './Components/StartView/StartView'
import Main from './Components/Main';
import Navbar from './Components/Navbar';




function App() {

  return (
    
    
    <AuctionContextProvider>
      <BidContextProvider>
        <Navbar/>
        <Main/>
        {/* <StartView/> */}
        {/* <CreateAuctionForm /> */}
        <ActiveAuction />
      </BidContextProvider>
    </AuctionContextProvider>
  );
}

export default App;
