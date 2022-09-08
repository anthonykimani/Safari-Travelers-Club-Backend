import { useState } from "react";

const Ratings = ({ rating }) => {
const [show,setShow] = useState(false);

  return (
    <div className="flex justify-around">
      <select name="ratings" onChange={rating}>
        <option value="1">Lowest</option>
        <option value="2">Low</option>
        <option value="3">Average</option>
        <option value="4">High</option>
        <option value="5">Highest</option>
      </select>
      <div>
        <h3 onClick={setShow(!show)}>Ratings:</h3>
        <div >

        </div>
      </div>
    </div>
  );
};

export default Ratings;
