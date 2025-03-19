// import planetImg from "../../assets/25minPlanet.png"
import { useState } from "react";
import planetImg from "../../assets/25minPlanet.svg"
// import planetImg2 from "../../assets/15minPlanet.svg"


const PlanetCommander = () => {

    const [animationRunning, setAnimationRunning] = useState<boolean>(false)
    // const [currPlanet, setCurrPlanet] = useState<string>(planetImg)

    const planet = document.getElementById("planet-img")
    if (planet) {
        planet.addEventListener("animationstart", () => {
            setAnimationRunning(true)
            console.log("animationRunning", animationRunning);

        });
        planet.addEventListener("animationend", () => {
            setAnimationRunning(false)
            console.log("animationRunning", animationRunning);

        });
    }



    return (
        <div className="planetary-command-wrapper boardered">
            <img src={planetImg} alt="" id="planet-img" className="planet-img active-planet" />
        </div>
    );
}

export default PlanetCommander;