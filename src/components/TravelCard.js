// import Ratings from "../components/Ratings";
import { useState } from "react";

const TravelCard = ({
  img,
  name = "Mara",
  location = "kenya",
  price = 54,
  rating,
  filteredReview,
  index
}) => {
  const [show, setShow] = useState(false);

  function handleToggle(){
    setShow(!show)
  }

  const reviewed_by_id = filteredReview.filter((element)=>{
    return element.destination_id == index;
  })

    
  function handleRatings(event){
    console.log(reviewed_by_id);
    const ratings = reviewed_by_id.filter((element)=>{
      return element.rating == event.target.value;
    })
    console.log(ratings)
  }

  return (
    <div className="">
      <div className="w-80 h-80 overflow-hidden">
        <img src={process.env.PUBLIC_URL + img} alt="" className="" />
      </div>
      <h3 className="font-bold text-2xl mt-4">{name}</h3>
      <div className="flex justify-between text-gray-500">
        <h4>{location}</h4>
        <h4>{price}$/person</h4>
        <div className="flex justify-around">
          <select name="ratings" onChange={handleRatings}>
            <option value="1">Lowest</option>
            <option value="2">Low</option>
            <option value="3">Average</option>
            <option value="4">High</option>
            <option value="5">Highest</option>
          </select>
          <div>
            <h3 onClick={handleToggle}>Ratings:</h3>
          </div>
        </div>
      </div>
      {/* <Ratings rating={rating} /> */}
      <button className="bg-sky-600 text-white px-4 py-2">Book now</button>
    </div>
  );
};

export default TravelCard;
