import planetImg from "../../assets/25minPlanet.png"


const PlanetCommander = () => {
    return (
        <div className="planetary-command-wrapper">
            <img src={planetImg} alt="" className="planet-img" />
        </div>
    );
}

export default PlanetCommander;