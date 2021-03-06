import React, {createContext, useState, useEffect} from 'react';
import {fetchAllAuctions} from '../Repositorys/AuctionAPIRepository';
export const AuctionContext = createContext();

const AuctionContextProvider = (props) => {
    
    const [auctions, setAuctions] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    const [currentAuctionID, setCurrentAuctionID] = useState(0);

    const getCurrentAuctionID = () => {
        return currentAuctionID;
    }

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
        setAuctions(auctions.filter(auction => auction.AuktionID !== id));
    }

    useEffect(() => {
        (async() => {
            let auctionsFromApi = await fetchAllAuctions();
            addAuctions(auctionsFromApi);
        })();    
    },[])
    
    const url = "http://nackowskis.azurewebsites.net/api/Auktion/2210";

    const postAuction = (auction) => {
        (async() => {
            await fetch(url,{
                    method: 'POST',
                    body: JSON.stringify(auction),
                    headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                    }
                    })
            await fetch(url)
            .then(res => res.json())
            .then(data => {
                setAuctions([...data]);
            })
        })(); 
    }

    const updateAuction = async (auction) =>{
        let otherAuctions = auctions.filter((a) => {
            return auction.AuktionID !== a.AuktionID;
        });
        
        await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(auction),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });
        setAuctions([...otherAuctions, auction]);
    }

    const deleteAuction = (id) => {
        let auctionnn = auctions.filter(auction => auction.AuktionID === id);
        let auction = auctionnn[0];
        fetch(url + "/" + id,{
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

    const updateCurrentAuctionID = (id) => {    
        setCurrentAuctionID(id);
    };

    return(
        <AuctionContext.Provider value={{auctions, searchResult, addAuctions, addOneAuction, postAuction, updateAuction, deleteAuction, addAuctionsToSearchResult, updateCurrentAuctionID, getCurrentAuctionID}}>
            { props.children }
        </AuctionContext.Provider>
    )
}

export default AuctionContextProvider;