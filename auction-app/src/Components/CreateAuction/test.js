import React, {useEffect} from 'react'

export default function Test() {

    var url = "http://nackowskis.azurewebsites.net/api/Auktion/2210";
    var testAuction = {Titel: "Hejhopp", Beskrivning: "hehe", StartDatum: "2019-04-28T00:00:00"
                        ,SlutDatum: "2019-04-30T00:00:00", Gruppkod: 2210, Utropspris: 4214,
                    SkapadAv: "Jimmy"};
        
    console.log(testAuction)
                    
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(testAuction),
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }
        }).then(function (data) {
        console.log('Request success: ', 'posten skapad');
       })
        

    return (
        <div>
            <p>hej</p>
        </div>
    )
}
