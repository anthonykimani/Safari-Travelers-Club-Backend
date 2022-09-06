import { useState,useEffect } from "react";

import LandingPage from "../components/LandingPage";
import Phrase from "../components/Phrase";
import Options from "../components/Options";
import TravelCard from "../components/TravelCard";
import Journey from "../components/Journey";
import Find from "../components/Find";
import Footer from "../components/Footer";

const Home = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/destinations")
    .then((response)=>response.json())
    .then((data) =>{
      console.log(data);
      setDestinations(data);
    });
  },[]);

  return (
    <div className="">
      <LandingPage destinations={destinations}/>
      <Phrase />
      <div className="flex justify-center">
        <Options name={"All"} />
        <Options name={"Savannah"} />
        <Options name={"Jungle"} />
        <Options name={"Sandy Beaches"} />
      </div>
      <div className="flex">
        {/* <TravelCard img={"/elephant-herd.jpg"} />
        <TravelCard img={"/pina-coladas.jpg"} />
        <TravelCard img={"/beach-sand.jpg"} />
        <TravelCard img={"/lion.jpg"} /> */}
        {/* <TravelCard img={'https://i.postimg.cc/KzP59dbh/safari-tour.jpg'} /> */}
        {destinations.map((destination)=>{
    console.log(destination.image);
    return <TravelCard img={destination.image} name={destination.name} location={destination.location} price={destination.price} />
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
