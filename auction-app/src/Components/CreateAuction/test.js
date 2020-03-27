import React, {useEffect} from 'react'

export default function Test() {

    var url = "http://nackowskis.azurewebsites.net/api/Auktion/2210";
    var testAuction = {Titel: "Hejhopp", Beskrivning: "hehe", StartDatum: "2019-04-28T00:00:00"
                        ,SlutDatum: "2019-04-30T00:00:00", Gruppkod: 2210, Utropspris: 4214,
                    SkapadAv: "Jimmy"};
        
    console.log(testAuction)

    

    const saveAuction = () => {
        //useRef
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(testAuction),
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            }
            }).then(function (data) {
            console.log('Request success: ', 'posten skapad');
           });

    }

       

    return (
        <div>
            <form onSubmit={saveAuction}>
                <input type="text" placeholder="Titel" ref={(val) => this.title = val}></input>
                <input type="text" placeholder="Beskrivning" ref={(val) => this.beskrivning = val}></input>
                <input type="date" placeholder="Startdatum" ref={(val) => this.startdatum = val}></input>
                <input type="date" placeholder="Slutdatum" ref={(val) => this.slutdatum = val}></input>
                <input type="number" placeholder="Gruppkod"ref={(val) => this.gruppkod = val}></input>
                <input type="number" placeholder="Utropspris"ref={(val) => this.utropspris = val}></input>
                <input type="text" placeholder="Skapad av"ref={(val) => this.skapadav = val}></input>
                <input type="submit">Spara</input>

            </form>
        </div>
    )
}
