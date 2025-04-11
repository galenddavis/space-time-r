// import planetImg from "../../assets/25minPlanet.png"
import { useEffect, useState } from "react";
import planetImg from "../../assets/25minPlanet.svg"
import planetImg2 from "../../assets/15minPlanet.svg"
import planetImg3 from "../../assets/5minPlanet.svg"

interface PlanetCommanderProps {
    timerDuration: "short" | "medium" | "long"
}

const PlanetCommander = ({ timerDuration }: PlanetCommanderProps) => {

    const [animationRunning, setAnimationRunning] = useState<boolean>(false)
    const [currPlanet, setCurrPlanet] = useState<string>(planetImg)



    useEffect(() => {
        const modeDurations: Record<'short' | 'medium' | 'long', number> = {
            short: 300,   // 5 minutes as seconds
            medium: 900,  // 15 minutes as seconds
            long: 1500,   // 25 minutes as seconds
          };
        const planet = document.getElementById("planet-img")
        const duration = modeDurations[timerDuration] + "s"
        if (planet) {
            planet.style.animationDuration = duration

        }
        const setPlanet = () => {
            switch (timerDuration) {
                case "short":
                    setCurrPlanet(planetImg)
                    break;
                case "medium":
                    setCurrPlanet(planetImg2)
                    break;
                case "long":
                    setCurrPlanet(planetImg3)
                    break;
                default:
                    break;
            }
        }
        setPlanet()
    },[timerDuration])

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
            <img src={currPlanet} alt="" id="planet-img" className="planet-img active-planet" />
        </div>
    );
}

export default PlanetCommander;