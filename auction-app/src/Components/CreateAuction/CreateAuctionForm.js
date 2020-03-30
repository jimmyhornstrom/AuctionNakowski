import React, {useContext, useState} from 'react';
import { AuctionContext } from '../../Context/AuctionContext';

export default function CreateAuctionForm(props) {

    // var testAuction = {Titel: "Hejhopp", Beskrivning: "hehe", StartDatum: "2019-04-28T00:00:00"
    //                     ,SlutDatum: "2019-04-30T00:00:00", Gruppkod: 2210, Utropspris: 4214,
    //                 SkapadAv: "Jimmy"};
        

    const { postAuction } = useContext(AuctionContext);

    const [titel, setTitel] = useState('');
    const [beskrivning, setBeskrivning] = useState('');
    const [startdatum, setStartdatum] = useState(new Date());
    const [slutdatum, setSlutdatum] = useState(new Date());
    const [gruppkod, setGruppkod] = useState(0);
    const [utropspris, setUtropsris] = useState(0);
    const [skapadAv, setSkapadAv] = useState('');

    var auction = {Titel: titel, Beskrivning: beskrivning, StartDatum: startdatum
                        ,SlutDatum: slutdatum, Gruppkod: gruppkod, Utropspris: utropspris,
                    SkapadAv: skapadAv};

    const handleSubmit= (e) => {
        e.preventDefault();
        postAuction(auction);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Titel" value={titel} 
                onChange={(e) => setTitel(e.target.value)} required/>
                <input type="text" placeholder="Beskrivning" value={beskrivning}
                onChange={(e) => setBeskrivning(e.target.value)} required/>
                <input type="date" placeholder="Startdatum" value={startdatum}
                onChange={(e) => setStartdatum(e.target.value)} required/>
                <input type="date" placeholder="Slutdatum" value={slutdatum}
                onChange={(e) => setSlutdatum(e.target.value)} required />
                <input type="number" placeholder="Gruppkod" value={gruppkod}
                onChange={(e) => setGruppkod(e.target.value)} required/>
                <input type="number" placeholder="Utropspris" value={utropspris}
                onChange={(e) => setUtropsris(e.target.value)} required/>
                <input type="text" placeholder="Skapad av" value={skapadAv}
                onChange={(e) => setSkapadAv(e.target.value)} required/>
                <input type="submit" value="Lägg till auktion"/>

            </form>
        </div>
    )
}
