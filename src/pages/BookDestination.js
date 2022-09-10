import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const BookDestination = ({
  usersLogin,
  credentials,
  setCredentials,
  destinationId,
  setDestinationId,
}) => {
  const [destination, setDestination] = useState({});

  //fetch destinations by id
  useEffect(() => {
    fetch(`https://safari-travelers-server.herokuapp.com/destinations/${destinationId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDestination(data);
      });
  }, [destinationId]);

  //   console.log(destination.schedules[0].day)

  return (
    <>
      <Navbar credentials={credentials} setCredentials={setCredentials} />
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
          <h3 className="text-xl py-5 font-bold">
            <span className="text-gray-800">${destination.price} </span>
            per trip
          </h3>
          <hr className="w-full bg-gray-400" />
          <button className="w-[150px] my-5 text-white bg-blue-500 hover:bg-blue-700 px-1 xsm:px-5 py-2 font-bold xxs:text-xs xsm:text-sm">Book Now</button>
        </div>
      </div>
    </>
  );
};

export default BookDestination;
