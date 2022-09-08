import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="relative object-cover object-center flex justify-around z-50 text-white py-2 bg-gray-900">
      <h2 className="font-extrabold font-sans text-md sm:text-2xl">Safari Travels</h2>
      <ul className="flex justify-between items-center">
        <li>
          <Link to={"/"} className="m-2  font-mono xxs:text-xs xsm:text-sm">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="m-2 font-mono xxs:text-xs xsm:text-sm">
            About
          </Link>
        </li>
      </ul>
      <li>
        <Link to={"/register"} className="text-white bg-blue-500 hover:bg-blue-700 px-1 xsm:px-5 py-2 font-bold xxs:text-xs xsm:text-sm">
          Register
        </Link>
      </li>
      {/* <button className="text-white bg-blue-500 px-5 py-2 font-bold">Register</button> */}
    </div>
  );
};

export default Navbar;
