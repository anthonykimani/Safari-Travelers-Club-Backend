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
  const [reviews,setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/destinations")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDestinations(data);
        setFilteredDestination(destinations);
      });
  }, []);

  function filterDestination(category) {
    const filtered = destinations.filter((destination) => {
      return category === destination.category;
    });
    setFilteredDestination(filtered);
  }

  function fetchAll(category) {
    const filtered = destinations.filter((destination) => {
      return category !== destination.category;
    });
    setFilteredDestination(filtered);
  }

  useEffect(()=>{
    fetch("http://localhost:9292/reviews")
    .then((response) => response.json())
    .then((data)=>setReviews(data))
  },[])
  
  function handleRatings(){
    const rated = reviews.filter((review) =>{
    })
    return setFilteredDestination(rated);
    // return rated;
  }

  return (
    <div className="">
      <LandingPage destinations={destinations} />
      <Phrase />
      <div className="flex  flex-col xsm:flex-row justify-center">
        <Options name={"all"} filter={fetchAll} />
        <Options name={"savannah"} filter={filterDestination} />
        <Options name={"jungle"} filter={filterDestination} />
        <Options name={"sandy beaches"} filter={filterDestination} />
        <Options name={1} filter={handleRatings} />
        <Options name={2} filter={handleRatings} />
        <Options name={3} filter={handleRatings} />
        <Options name={4} filter={handleRatings} />
        <Options name={5} filter={handleRatings} />
        {/* <select name="ratings" onChange={()=>handleRatings()}>
          <option value="1">Lowest</option>
          <option value="2">Low</option>
          <option value="3">Average</option>
          <option value="4">High</option>
          <option value="5">Highest</option>
        </select> */}
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
