import React, {useContext} from 'react'
import { AuctionContext } from '../../Context/AuctionContext'

export default function Test() {

   

    const { addAuction } = useContext(AuctionContext);
    
   

       

    return (
        <div>
            {/* <form>
                <input type="text" placeholder="Titel" ref={(val) => this.title = val}></input>
                <input type="text" placeholder="Beskrivning" ref={(val) => this.beskrivning = val}></input>
                <input type="date" placeholder="Startdatum" ref={(val) => this.startdatum = val}></input>
                <input type="date" placeholder="Slutdatum" ref={(val) => this.slutdatum = val}></input>
                <input type="number" placeholder="Gruppkod"ref={(val) => this.gruppkod = val}></input>
                <input type="number" placeholder="Utropspris"ref={(val) => this.utropspris = val}></input>
                <input type="text" placeholder="Skapad av"ref={(val) => this.skapadav = val}></input>
                <input type="submit">Spara</input>

            </form> */}
        </div>
    )
}
