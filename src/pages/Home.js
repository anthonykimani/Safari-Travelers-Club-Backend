import { useState, useEffect } from "react";

import LandingPage from "../components/LandingPage";
import Phrase from "../components/Phrase";
import Options from "../components/Options";
import TravelCard from "../components/TravelCard";
import Journey from "../components/Journey";
import Find from "../components/Find";
import Footer from "../components/Footer";

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestination, setFilteredDestination] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/destinations")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDestinations(data);
        setFilteredDestination(destinations)
      });
  }, []);

  function filterDestination(category) {
    const filtered = destinations.filter((destination) => {
      return category === destination.category;
    });
    setFilteredDestination(filtered);
  }

  // filterDestination("savannah")
  // setFilteredDestination(destinations);

  return (
    <div className="">
      <LandingPage destinations={destinations} />
      <Phrase />
      <div className="flex justify-center">
        <Options name={"all"} filter={filterDestination} />
        <Options name={"savannah"} filter={filterDestination} />
        <Options name={"jungle"} filter={filterDestination} />
        <Options name={"sandy beaches"} filter={filterDestination} />
      </div>
      <div className="grid grid-cols-4">
        {filteredDestination.map((destination) => {
          console.log(destination.image);
          return (
            <TravelCard
              img={destination.image}
              name={destination.name}
              location={destination.location}
              price={destination.price}
            />
          );
        })}
      </div>
      <div>
        <Journey />
        <Find />
      </div>
    </div>
  );
};

export default Home;
