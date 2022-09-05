import Navbar from "./Navbar";
import HomeText from "./HomeText";

const LandingPage = () => {
  return (
    <div className="" id="landing">
      <img
        src={process.env.PUBLIC_URL + "/safari-ambience.jpg"}
        alt=""
        className="absolute top-0 left-0 z-0"
      />
      <Navbar />
      <HomeText />
    </div>
  );
};

export default LandingPage;