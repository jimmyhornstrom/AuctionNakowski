import React, {useContext, useState} from 'react';
import { AuctionContext } from '../../Context/AuctionContext';
import '../form.css';

export default function CreateAuctionForm(props) {

    const { postAuction } = useContext(AuctionContext);
    
    const [titel, setTitel] = useState('');
    const [beskrivning, setBeskrivning] = useState('');
    const [startdatum, setStartdatum] = useState(new Date());
    const [slutdatum, setSlutdatum] = useState(new Date());
    const [utropspris, setUtropsris] = useState(0);
    const [skapadAv, setSkapadAv] = useState('');

    var auction = {Titel: titel, Beskrivning: beskrivning, StartDatum: startdatum
                        ,SlutDatum: slutdatum, Gruppkod: 2210, Utropspris: utropspris,
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
        <React.Fragment> 
            <br/>
            <br/>
            <div className="formContainer">
                <br/>
                <form onSubmit={handleSubmit}>
                    <label>Titel</label>
                    <br />
                    <input type="text" placeholder="Titel" value={titel} 
                    onChange={(e) => setTitel(e.target.value)} required/>
                    <br />
                    <label>Beskrivning</label>
                    <br />                
                    <textarea rows="4" cols="61" placeholder="Beskrivning" value={beskrivning}
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
                    <br />
                    <input type="submit" value="Lägg till auktion"/>
                </form>
            </div>
        </React.Fragment>
    )
}
