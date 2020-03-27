import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Components/CreateAuction/test'
import BidContextProvider from './Context/BidContext';

function App() {

  
  return (
    <BidContextProvider>
    <div></div>
    {/* <Test /> */}
    </BidContextProvider>
  );
}

export default App;
