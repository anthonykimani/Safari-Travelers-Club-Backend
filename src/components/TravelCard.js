// import Ratings from "../components/Ratings";
import { useState } from "react";

const TravelCard = ({
  img,
  name = "Mara",
  location = "kenya",
  price = 54,
  rating,
  filteredReview,
  index,
}) => {
  const [comment, setComment] = useState([]);
  const [show, setShow] = useState(false);

  function handleToggle() {
    console.log("clicked")
    setShow(!show);
  }

  const reviewed_by_id = filteredReview.filter((element) => {
    return element.destination_id == index + 1;
  });

  function handleRatings(event) {
    console.log(reviewed_by_id);
    const ratings = reviewed_by_id.filter((element) => {
      return element.rating == event.target.value;
    });
    setComment(ratings);
  }

  return (
    <div className="rounded-lg bg-white shadow-lg overflow-hidden m-2">
      <div className="w-[96] h-[102] overflow-hidden">
        <img src={process.env.PUBLIC_URL + img} alt="" className="" />
      </div>
      <h3 className="font-bold text-2xl m-4">{name}</h3>
      <div className="flex flex-col justify-between text-gray-500 m-4">
        <div className="flex ">
          <h3 className="font-bold text-gray-800">Location:</h3>
          <h4 className="ml-2">{location}</h4>
        </div>
        <div className="flex ">
          <h3 className="font-bold text-gray-800">Price per trip:</h3>
          <h4 className="ml-2">{price}$/person</h4>
        </div>
        <div className="flex justify-between">
          <div>
            <h3>Ratings:</h3>
            <i
              class="bx bx-chevron-down-circle bx-sm"
              onClick={handleToggle}
            ></i>
          </div>
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
        <div className="rounded-lg bg-white shadow-lg overflow-hidden">
          {comment.map((element) => {
            return <h3 className="m-3">{element.comment}</h3>;
          })}
        </div>
      </div>
      {/* <Ratings rating={rating} /> */}
      <button className="bg-sky-600 text-white px-4 py-2 m-4 hover:bg-blue-700">Book now</button>
    </div>
  );
};

export default TravelCard;
