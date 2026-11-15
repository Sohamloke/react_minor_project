import Searchbox from "./Searchbox"
import Infobox from "./InfoBox"
import { useState } from "react"

export default function WheatherApp() {
    const [wheatherInfo, setWheatherInfo] = useState({
        city: "Delhi",
        feelslike: 17.56,
        temp: 18.05,
        tempMax: 18.05,
        tempMin: 18.05,
        humidity: 63,
        wheather: "haze"
    })

    let updateInfo = (result) => {
        setWheatherInfo(result);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Wheather App by Soham</h2>
            <Searchbox updateInfo={updateInfo}/>
            <Infobox info={wheatherInfo} />
        </div>
    )
}