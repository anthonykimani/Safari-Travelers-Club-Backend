import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import { LoginContext } from "../contexts/LoginContext";

const BookDestination = ({
  // usersLogin,
  // credentials,
  // setCredentials,
  // destinationId,
  // setDestinationId,
}) => {
  const { destinationId } = useContext(LoginContext);
  // const {  } = useContext(LoginContext);
  const { credentials } = useContext(LoginContext);

  const [destination, setDestination] = useState({});
  const [booked, setBooked] = useState(false);
  const [fetchedSchedule, setFetchedSchedule] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState([]);
  const [hasFriends, setHasFriends] = useState(false);
  const [schedule, setSchedule] = useState({
    day: "sunday",
    time: "4am",
    user_id: credentials.id,
    destination_id: destinationId,
  });

  //fetch destinations by id
  useEffect(() => {
    fetch(`https://safari-travelers-server.herokuapp.com/destinations/${destinationId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDestination(data);
      });
  }, [destinationId]);

  //fetches the schedules
  useEffect(() => {
    fetch("https://safari-travelers-server.herokuapp.com/schedules")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFetchedSchedule(data);
      });
  }, [booked]);

  //filter to only return element equal to destination id
  const filteredSchedule = fetchedSchedule.filter((element) => {
    return (
      element.destination_id === destinationId &&
      element.user_id === credentials.id
    );
  });

  console.log(filteredSchedule);
  console.log(fetchedSchedule);

  //   console.log(destination.schedules[0].day)

  //books a schedule
  function handleSchedule(event) {
    const name = event.target.name;
    const value = event.target.value;
    setSchedule({ ...schedule, [name]: value });
    console.log(schedule);
  }

  //books schedule to database
  function handleSubmit() {
    setBooked(true);
    fetch("https://safari-travelers-server.herokuapp.com/schedules", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(schedule),
    });
  }

  //cancels the booked destination
  function handleCancel() {
    setBooked(false);
    fetch(
      `https://safari-travelers-server.herokuapp.com/schedules/${filteredSchedule[0].destination_id}`,
      {
        method: "DELETE",
      }
    );
  }

  //fetch reviews
  useEffect(() => {
    fetch("https://safari-travelers-server.herokuapp.com/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  //filter out comments based on id
  const reviewed_by_id = reviews.filter((element) => {
    return element.destination_id == destinationId;
  });

  //filter out comments based on ratings
  function handleRatings(event) {
    console.log(reviewed_by_id);
    const ratings = reviewed_by_id.filter((element) => {
      return element.rating == event.target.value;
    });
    setComment(ratings);
  }

  //see friends
  function seeFriends() {
    if (fetchedSchedule.length > 0) {
      setHasFriends(!hasFriends);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="bg-indigo-50 flex flex-col items-center">
        <div className="flex flex-col bg-white p-5 m-5 rounded-md text-gray-700 sm:w-[90%]">
          <h1 className="text-2xl py-2 font-bold">{destination.name}</h1>
          <hr className="w-full bg-gray-400" />
          <h4 className="text-xl py-2 font-medium">{destination.location}</h4>
          <div>
            <img
              src={destination.image}
              alt=""
              className="rounded sm:h-[350px] sm:w-[500px] "
            />
          </div>
          <h4></h4>
          <hr className="w-full bg-gray-400" />
          <h4 className="text-base py-2 font-medium">
            category{" "}
            <span className="text-gray-800">{destination.category}</span>
          </h4>
          <hr className="w-full bg-gray-400" />
          <div className="flex items-center justify-between flex-col sm:flex-row sm:w-[500px] w-[200px]">
            <h3 className="text-xl py-5 font-bold">
              <span className="text-gray-800">${destination.price} </span>
              per trip
            </h3>
            <div className="flex">
              <select
                name="time"
                id="time"
                onChange={handleSchedule}
                className="h-10 border-solid border border-gray-400 rounded mx-2 outline-none hover:border-gray-500"
              >
                <option value="4am">4am</option>
                <option value="9am">9am</option>
                <option value="4pm">4pm</option>
                <option value="9pm">9pm</option>
              </select>
              <select
                name="day"
                id="day"
                onChange={handleSchedule}
                className="h-10 border-solid border border-gray-400 rounded mx-2 outline-none hover:border-gray-500"
              >
                <option value="monday">monday</option>
                <option value="tuesday">tuesday</option>
                <option value="wednesday">wednesday</option>
                <option value="thursday">thursday</option>
                <option value="friday">friday</option>
                <option value="saturday">saturday</option>
                <option value="sunday">sunday</option>
              </select>
            </div>
          </div>
          <hr className="w-full bg-gray-400" />
          <div className="w-[100px]">
            <select
              name="ratings"
              onChange={handleRatings}
              className="h-8 border-solid border border-gray-400 hover:border-gray-600 rounded mt-2 outline-none"
            >
              <option value="1">Lowest</option>
              <option value="2">Low</option>
              <option value="3">Average</option>
              <option value="4">High</option>
              <option value="5">Highest</option>
            </select>
          </div>
          <hr className="w-full bg-gray-400" />
          {/* <button className="w-[200px] my-5 text-gray-500 bg-white border-2  hover:bg-lightgray-700 px-0 xsm:px-5 py-2 font-bold xxs:text-xs xsm:text-sm" onClick={seeFriends}>See Friends Going</button>
          <div style={hasFriends ? { display: "block" } : { display: "none" }}>
            {fetchedSchedule.map((element) => {
              return <h3>{element.user.first_name} is also comming along</h3>;
            })}
          </div>  */}
          <hr className="w-full bg-gray-400" />
          <div className="rounded-lg bg-white shadow-lg overflow-hidden">
            {comment.map((element) => {
              return <h3 className="m-3">{element.comment}</h3>;
            })}
          </div>
          <hr className="w-full bg-gray-400" />
          <div className="flex justify-between flex-col sm:flex-row sm:w-[500px] w-[200px]">
            <button
              className="w-[150px] my-5 text-white bg-blue-500 hover:bg-blue-700 px-1 xsm:px-5 py-2 font-bold xxs:text-xs xsm:text-sm"
              onClick={handleSubmit}
            >
              {booked ? "Booked" : "Book Now"}
            </button>
            <button
              className="w-[150px] my-5 text-white bg-red-500 hover:bg-red-700 px-1 xsm:px-5 py-2 font-bold xxs:text-xs xsm:text-sm"
              style={booked ? { display: "block" } : { display: "none" }}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDestination;
