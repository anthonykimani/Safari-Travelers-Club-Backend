import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navbar = ({ usersLogin, credentials, setCredentials }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showSideBarDetails, setShowSideBarDetails] = useState(false);

  function handleToggle() {
    setShowSideBar(!showSideBar);
  }

  function handleDetails() {
    setShowSideBarDetails(!showSideBarDetails);
  }

  // console.log(usersLogin);

  // setCredentials({
  //   first_name:"John"
  // })
  // console.log(credentials);
  return (
    <>
      <div className="relative object-cover object-center flex items-center justify-around z-50 text-white py-2 bg-gray-900">
        <h2 className="font-extrabold font-sans text-md sm:text-2xl">
          Safari Travels
        </h2>
        <ul className="flex justify-between items-center">
          <li>
            <Link to={"/"} className="m-2  font-mono xxs:text-xs xsm:text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="m-2 font-mono xxs:text-xs xsm:text-sm"
            >
              About
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-around">
          <li>
            <Link
              to={"/register"}
              className="text-white bg-blue-500 hover:bg-blue-700 px-1 xsm:px-5 py-2 font-bold xxs:text-xs xsm:text-sm"
            >
              Login
            </Link>
          </li>
          <div className="flex items-center">
            <i
              class="bx bxs-user-circle bx-lg text-blue-400 pl-10"
              onClick={handleToggle}
            ></i>
          </div>
        </div>
      </div>
      <div
        className="absolute right-0 bg-white z-50 h-[100%] w-[100%] flex-col items-center sm:w-[30%]"
        style={showSideBar ? { display: "flex" } : { display: "none" }}
      >
        <h3
          className="font-bold border border-gray-700 w-full text-center"
          onClick={handleDetails}
        >
          Profile
        </h3>
        <ul
          className="font-bold border text-gray-700 border-gray-700 w-full"
          style={
            showSideBarDetails ? { display: "none" } : { display: "block" }
          }
        >
          <li>firstname: {credentials.first_name}</li>
          <li>lastname: {credentials.lastname}</li>
          <li>email: {credentials.email}</li>
        </ul>
        <h3
          className="font-bold border border-gray-700 w-full text-center"
          onClick={handleDetails}
        >
          <Link to={"/schedules"}>Schedules</Link>
        </h3>
      </div>
    </>
  );
};

export default Navbar;
