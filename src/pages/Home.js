import { useState, useEffect } from "react";

import LandingPage from "../components/LandingPage";
import Phrase from "../components/Phrase";
import Options from "../components/Options";
import TravelCard from "../components/TravelCard";
import Journey from "../components/Journey";
import Find from "../components/Find";
import { useNavigate } from "react-router-dom";
// import Footer from "../components/Footer";

const Home = ({
  usersLogin,
  credentials,
  setCredentials,
  setDestinationId,
  isLoggedIn,
}) => {
  const [filteredDestination, setFilteredDestination] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [fetchedSchedule, setFetchedSchedule] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const navigate = useNavigate();

  //redirects to login page
  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/register");
    } else {
      console.log("not logged in");
    }
  }, []);


  //fetch destinations
  useEffect(() => {
    fetch("https://safari-travelers-server.herokuapp.com/destinations")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDestinations(data);
        setFilteredDestination(data);
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
  useEffect(() => {
    fetch("https://safari-travelers-server.herokuapp.com/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  //fetches the schedules
  useEffect(() => {
    fetch("https://safari-travelers-server.herokuapp.com/schedules")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFetchedSchedule(data);
      });
  }, []);

  console.log(fetchedSchedule);

  // function handleRatings(event){
  //   console.log(reviews);
  //   const ratings = reviews.filter((element)=>{
  //     return element.destination_id == event.target.value;
  //   })
  //   console.log(ratings)
  // }

  return (
    <div className="bg-indigo-50">
      <LandingPage
        destinations={destinations}
        usersLogin={usersLogin}
        credentials={credentials}
        setCredentials={setCredentials}
      />
      />
      <Phrase />
      <div className="flex flex-wrap xsm:flex-row justify-center">
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
        {filteredDestination.map((destination, index) => {
          console.log(destination.image);
          return (
            <TravelCard
              img={destination.image}
              name={destination.name}
              location={destination.location}
              price={destination.price}
              filteredReview={reviews}
              index={index}
              id={destination.id}
              setDestinationId={setDestinationId}
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
