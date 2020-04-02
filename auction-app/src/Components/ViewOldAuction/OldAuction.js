import React,{useContext} from 'react';
import { AuctionContext } from '../../Context/AuctionContext';
import AuctionItem from '../StartView/AuctionDetail';
import classes from '../StartView/StartView.module.css'

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

            <React.Fragment>
                <br/>
                <br/>
                <br/>
                <br/>
                
            <div id={classes.startview}>
            <table>
            <tr>
            <th>Titel</th>
            <th>Pris</th>
            <th>StartDatum</th>
            <th>SlutDatum</th>
            <th>Skapad av</th>
            <th></th>
            </tr>
            </table> 
            {list}
            {/* <p>{JSON.stringify(auction)} -Avslutad</p> */}
        </div>
        </React.Fragment>
        )
}
export default GetOldAuctions;