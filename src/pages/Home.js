import { useState, useEffect } from "react";

import LandingPage from "../components/LandingPage";
import Phrase from "../components/Phrase";
import Options from "../components/Options";
import TravelCard from "../components/TravelCard";
import Journey from "../components/Journey";
import Find from "../components/Find";
// import Footer from "../components/Footer";

const Home = ({usersLogin,credentials,setCredentials}) => {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestination, setFilteredDestination] = useState([]);
  const [reviews,setReviews] = useState([]);

  //fetch destinations
  useEffect(() => {
    fetch("http://localhost:9292/destinations")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDestinations(data);
        setFilteredDestination(destinations);
      });
  }, []);

  //filter destination categories
  function filterDestination(category) {
    const filtered = destinations.filter((destination) => {
      return category === destination.category;
    });
    setFilteredDestination(filtered);
  }

  //filter destination categories
  function fetchAll(category) {
    const filtered = destinations.filter((destination) => {
      return category !== destination.category;
    });
    setFilteredDestination(filtered);
  }

  //fetch reviews 
  useEffect(()=>{
    fetch("http://localhost:9292/reviews")
    .then((response) => response.json())
    .then((data)=>setReviews(data))
  },[])

  
  // function handleRatings(event){
  //   console.log(reviews);
  //   const ratings = reviews.filter((element)=>{
  //     return element.destination_id == event.target.value;
  //   })
  //   console.log(ratings)
  // }

  return (
    <div className="bg-indigo-50">
      <LandingPage destinations={destinations} usersLogin={usersLogin}  credentials={credentials} setCredentials={setCredentials}/>/>
      <Phrase />
      <div className="flex  flex-col xsm:flex-row justify-center">
        <Options name={"all"} filter={fetchAll} />
        <Options name={"savannah"} filter={filterDestination} />
        <Options name={"jungle"} filter={filterDestination} />
        <Options name={"sandy beaches"} filter={filterDestination} />
        {/* <Options name={1} filter={handleRatings} />
        <Options name={2} filter={handleRatings} />
        <Options name={3} filter={handleRatings} />
        <Options name={4} filter={handleRatings} />
        <Options name={5} filter={handleRatings} /> */}
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3">
        {filteredDestination.map((destination,index) => {
          console.log(destination.image);
          return (
            <TravelCard
              img={destination.image}
              name={destination.name}
              location={destination.location}
              price={destination.price}
              filteredReview={reviews}
              index={index}
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
