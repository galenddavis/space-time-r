// import planetImg from "../../assets/25minPlanet.png"
import planetImg from "../../assets/25minPlanet.svg"


const PlanetCommander = () => {
    return (
        <div className="planetary-command-wrapper">
            <img src={planetImg} alt="" className="planet-img active-planet" />
        </div>
    );
}

export default PlanetCommander;