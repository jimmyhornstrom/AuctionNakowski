import React from 'react';
import './App.css';
import Test from './Components/CreateAuction/test'
import BidContextProvider from './Context/BidContext';
import ActiveAuction from './Components/ViewActiveAuction/ActiveAuction';
import AuctionContextProvider from './Context/AuctionContext';
import StartView from './Components/StartView/StartView'


function App() {
  
  return (
    
    <AuctionContextProvider>
      <BidContextProvider>
      <div>
     <StartView/>
     </div>
          <ActiveAuction />
      </BidContextProvider>
    </AuctionContextProvider>
  );
}

export default App;
