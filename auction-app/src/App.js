import React from 'react';
import './App.css';
import Test from './Components/CreateAuction/test'
import BidContextProvider from './Context/BidContext';
import StartView from './Components/StartView/StartView'

function App() {

  
  return (
    <BidContextProvider>
    <div>
     <StartView/>
    </div>
    {/* <Test /> */}
    </BidContextProvider>
  );
}

export default App;
