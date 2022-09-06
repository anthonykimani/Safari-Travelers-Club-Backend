import LandingPage from "../components/LandingPage";
import Phrase from "../components/Phrase";
import Options from "../components/Options";
import TravelCard from "../components/TravelCard";

const Home = () => {
  return (
    <div className="">
      <LandingPage />
      <Phrase />
      <div className="flex justify-center">
        <Options name={"All"} />
        <Options name={"Savannah"} />
        <Options name={"Jungle"} />
        <Options name={"Sandy Beaches"} />
      </div>
      <div className="flex">
        <TravelCard img={"/elephant-herd.jpg"} />
        <TravelCard img={"/pina-coladas.jpg"} />
        <TravelCard img={"/beach-sand.jpg"} />
        <TravelCard img={"/lion.jpg"} />
      </div>
    </div>
  );
};

export default Home;
