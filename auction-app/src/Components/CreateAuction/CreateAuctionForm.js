import React, {useContext, useState} from 'react';
import { AuctionContext } from '../../Context/AuctionContext';
import '../form.css';

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
        setTitel('');
        setBeskrivning('');
        setStartdatum(new Date());
        setSlutdatum(new Date());
        setUtropsris(0);
        setSkapadAv('');

    }

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <label>Titel</label>
                <br />
                <input type="text" placeholder="Titel" value={titel} 
                onChange={(e) => setTitel(e.target.value)} required/>
                <br />
                <label>Beskrivning</label>
                <br />                
                <textarea rows="10" cols="61" placeholder="Beskrivning" value={beskrivning}
                onChange={(e) => setBeskrivning(e.target.value)} required/>
                <br />
                <label>Startdatum för auktionen</label>
                <br />
                <input type="datetime-local" placeholder="Startdatum" value={startdatum}
                onChange={(e) => setStartdatum(e.target.value)} required/>
                <br />
                <label>Slutdatum för auktionen</label>
                <br />
                <input type="datetime-local" placeholder="Slutdatum" value={slutdatum}
                onChange={(e) => setSlutdatum(e.target.value)} required />
                <br />
                <label>Utropspris</label>
                <br />
                <input type="number" placeholder="Utropspris" value={utropspris}
                onChange={(e) => setUtropsris(e.target.value)} required/>
                <br />
                <label>Skapare av auktionen</label>
                <br />
                <input type="text" placeholder="Skapad av" value={skapadAv}
                onChange={(e) => setSkapadAv(e.target.value)} required/>
                <br />
                <label>Gruppkod</label>
                <br />
                <input type="number" placeholder="Gruppkod" value={2210}
                onChange={(e) => setGruppkod(e.target.value)} required/>
                <br />
                <input type="submit" value="Lägg ut ny auktion"/>

            </form>
        </div>
    )
}
