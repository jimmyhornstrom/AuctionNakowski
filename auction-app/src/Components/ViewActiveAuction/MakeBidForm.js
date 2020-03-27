import React, {useEffect} from 'react'

export default function MakeBidForm(props) {

    // let url = "http://nackowskis.azurewebsites.net/api/Bud/2210";
    // let bid = {Summa: 10, AuktionID: props.aID, Budgivare: "hämtat från input"};
                  
    // fetch(url,{
    //     method: 'POST',
    //     body: JSON.stringify(bid),
    //     headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //     }
    //     }).then(function (data) {

    //         //rendera om historiken, uppdatera state mao

    //         console.log('Request success: ', 'posten skapad');
    //    })

    return (
        <React.Fragment>
            <form>
                <label>Ditt bud</label>
                <input type="number" min="0" />
            </form>
        </React.Fragment>
    )
}