import React,{useContext} from 'react';
import { AuctionContext } from '../../Context/AuctionContext';
import AuctionItem from './AuctionDetail';

const GetOldAuctions = () => {
    
    const {auctions} = useContext(AuctionContext)
   
        let filteredList =  auctions.filter(a => { 
          return a.SlutDatum < Date.now();
        });
        let list = filteredList.map(a => {
            return <AuctionItem auctions={a}/>
        })
        
        return(    
        <div>
            {list}
            <p>{JSON.stringify(auctions)} -Avslutad</p>
        </div>
        )
}
export default GetOldAuctions;