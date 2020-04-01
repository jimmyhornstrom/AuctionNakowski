import React,{useContext} from 'react';
import { AuctionContext } from '../../Context/AuctionContext';
import AuctionItem from '../StartView/AuctionDetail';

const GetOldAuctions = () => {
    
    const {auctions} = useContext(AuctionContext);

    var currentDate = new Date(Date.now());

    if(auctions.length ){
        let oldAuctions = auctions.filter(a => new Date(a.SlutDatum) < currentDate);
        var list = oldAuctions.map(a => {
            return (<AuctionItem auction={a} key={a.AuktionID} />)
        })
    }
   
        // let filteredList =  auctions.filter(a => { 
        //   return a.SlutDatum < Date.now();
        // });
        // let list = filteredList.map(a => {
        //     return <AuctionItem auction={a}/>
        // })
        
        return(    
        <div>
            {list}
            {/* <p>{JSON.stringify(auction)} -Avslutad</p> */}
        </div>
        )
}
export default GetOldAuctions;