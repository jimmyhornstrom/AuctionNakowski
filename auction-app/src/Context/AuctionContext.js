import React, {createContext, useState, useEffect} from 'react';
import {fetchAllAuctions, postAuctionToApi} from '../Repositorys/AuctionAPIRepository';
export const AuctionContext = createContext();

const AuctionContextProvider = (props) => {
    

    const url = "http://nackowskis.azurewebsites.net/api/Auktion/2210";

    const [auctions, setAuctions] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    const addAuctionsToSearchResult = (auctionArray) => {
        setSearchResult([...auctionArray]);
    }

    const addAuctions = (auctionArray) => {

        setAuctions([...auctions, ...auctionArray]);
    }
    const addOneAuction = (singleAuction) => {
        setAuctions([...auctions, singleAuction]);
    }
    const removeAuction = (id) => {
        //tar bara bort i context just nu, behöver ta bort i db också
        setAuctions(auctions.filter(auction => auction.AuktionID !== id));
    }

    // const fetchAuctions = () => {
    //      fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         addAuctions(data);
    //     })

    // }

    useEffect(() => {
        (async() => {
            let auctionTest = await fetchAllAuctions();
            addAuctions(auctionTest);
            
        })();    
    },[])

    const postAuction = (auction) => {

        postAuctionToApi(auction);
        addOneAuction(auction);

        
    }

    const updateAuction = async (auction) =>{
        //in progress 
        let otherAuctions = auctions.filter((a) => {
            return auction.AuktionID !== a.id;
        });
        
        await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(auction),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });
        setAuctions(...otherAuctions, auction);
    }

    const deleteAuction = (auction) => {

        fetch(url,{
            method: 'DELETE',
            body: JSON.stringify(auction),
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            }
            }).then(() => {
            removeAuction(auction.AuktionID)
           });

    }


    return(
        <AuctionContext.Provider value={{auctions, searchResult, addAuctions, addOneAuction, removeAuction, postAuction, updateAuction, deleteAuction, addAuctionsToSearchResult}}>
            { props.children }
        </AuctionContext.Provider>
    )
}

export default AuctionContextProvider;