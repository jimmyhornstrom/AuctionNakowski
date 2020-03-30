import React from 'react';
import './App.css';
import Test from './Components/CreateAuction/test'
import BidContextProvider from './Context/BidContext';
<<<<<<< HEAD
import StartView from './Components/StartView/StartView'
=======
import ActiveAuction from './Components/ViewActiveAuction/ActiveAuction';
import AuctionContextProvider from './Context/AuctionContext';
>>>>>>> 3b15be75e69f65878934a2cc4830ba15befd3bc5


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
