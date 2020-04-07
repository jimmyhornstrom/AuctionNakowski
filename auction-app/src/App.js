import React from 'react';
import './App.css';
import BidContextProvider from './Context/BidContext';
import AuctionContextProvider from './Context/AuctionContext';
import Main from './Components/Main';
import Navbar from './Components/Navbar';

function App() {
  return (
    <AuctionContextProvider>
      <BidContextProvider>
        <Navbar/>
        <Main/>
      </BidContextProvider>
    </AuctionContextProvider>
  );
}

export default App;
