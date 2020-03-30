import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Test from './Components/CreateAuction/test'
import BidContextProvider from './Context/BidContext';
import ActiveAuction from './Components/ViewActiveAuction/ActiveAuction';
import AuctionContextProvider from './Context/AuctionContext';
import Main from './Components/Main';
import Navbar from './Components/Navbar'


function App() {
  
  return (
    <AuctionContextProvider>
      <BidContextProvider>
        <Navbar/>
        <Main/>
          {/* <Test /> */}
          <ActiveAuction />
      </BidContextProvider>
    </AuctionContextProvider>
  );
}

export default App;
