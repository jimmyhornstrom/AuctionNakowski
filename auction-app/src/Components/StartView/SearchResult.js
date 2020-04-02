import React,{useContext} from 'react';
import { AuctionContext } from '../../Context/AuctionContext';
import AuctionItem from '../StartView/AuctionDetail';

const SearchResult = () => {
    
    const {searchResult} = useContext(AuctionContext);

    if(searchResult.length ){        
        var list = searchResult.map(a => {
            return (<AuctionItem auction={a} key={a.AuktionID} />)
        })
    }
   
        return(    
        <div>
            {list}
        </div>
        )
}
export default SearchResult;