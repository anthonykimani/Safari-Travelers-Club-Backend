import LandingPage from "../components/LandingPage";
import Phrase from "../components/Phrase";
import Options from "../components/Options";

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
    </div>
  );
};

export default Home;
