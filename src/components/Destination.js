import { data } from "autoprefixer";
import { useState, useEffect } from "react";

const Destination = ({ destinations }) => {
  const [users, setUsers] = useState([]);

  const [schedule, setSchedule] = useState({
    destination_id: 2,
    time: "4am",
    day: "monday",
    user_id: 1,
  });

  const areas = destinations.map((destination, index) => {
    return (
      <option key={index} value={destination.id}>
        {destination.name}
      </option>
    );
  });

  const user = users.map((user, index) => {
    return (
      <option key={index} value={user.id}>
        {user.first_name}
      </option>
    );
  });

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [data]);

  // const id = users.length;

  function handleSchedule(event) {
    const name = event.target.name;
    const value = event.target.value;
    setSchedule({ ...schedule, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(schedule);
    fetch(`http://localhost:9292/schedules`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(schedule),
    });
  }

  return (
    <div className="relative flex flex-col xsm:flex-row items-center rounded bg-white shadow-lg w-[90%] justify-around mt-48 md:mt-72 ml-5 h-72 md:h-40">
      <div className="flex flex-col justify-between h-26">
        <label htmlFor="destination">Choose a Destination:</label>
        <select name="destination" id="destination" onChange={handleSchedule} className="h-10 border-solid border border-gray-400 rounded mx-2 outline-none">
          {areas}
        </select>
      </div>
      <div className="flex flex-col justify-between h-26">
        <label htmlFor="schedule">Choose Schedule</label>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
          <select name="time" id="time" onChange={handleSchedule} className="h-10 border-solid border border-gray-400 rounded mx-2 outline-none">
            <option value="4am">4am</option>
            <option value="9am">9am</option>
            <option value="4pm">4pm</option>
            <option value="9pm">9pm</option>
          </select>
          <select name="day" id="day" onChange={handleSchedule} className="h-10 border-solid border border-gray-400 rounded mx-2 outline-none">
            <option value="monday">monday</option>
            <option value="tuesday">tuesday</option>
            <option value="wednesday">wednesday</option>
            <option value="thursday">thursday</option>
            <option value="friday">friday</option>
            <option value="saturday">saturday</option>
            <option value="sunday">sunday</option>
          </select>
          <select name="user" id="user" onChange={handleSchedule} className="h-10 border-solid border border-gray-400 rounded mx-2 outline-none">
            {user}
          </select>
          <input type="submit" value="Schedule Safari" className="text-white bg-blue-500 px-5 py-2 font-bold" />
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Destination;
