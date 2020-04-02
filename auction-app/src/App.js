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
import UpdateForm from './Components/UpdateAction/UpdateForm';
import OldAuction from './Components/ViewOldAuction/OldAuction';




function App() {
//4604
  return (
    
    
    <AuctionContextProvider>
      <BidContextProvider>
        <Navbar/>
        <Main/>
        {/* <StartView/> */}
        {/* <UpdateForm/> */}
        {/* <UpdateForm id={4700} /> */}
        {/* <CreateAuctionForm /> */}
        {/* <ActiveAuction id={4700} /> */}
        <OldAuction />
      </BidContextProvider>
    </AuctionContextProvider>
  );
}

export default App;
