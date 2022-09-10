import { useState, useEffect } from "react";

const Destination = ({ destinations }) => {
  const [users, setUsers] = useState([]);
  const [plannedSchedule, setPlannedSchedule] = useState([]);
  const [updated,setUpdated] = useState(false);

  const [schedule, setSchedule] = useState({
    destination_id:1,
    time: "",
    day: "",
    user_id: 1,
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
  }, []);

  // const id = users.length;

  function handleSchedule(event) {
    const name = event.target.name;
    const value = event.target.value;
    setSchedule({ ...schedule, [name]: value });
    console.log(schedule)
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(schedule);
    setUpdated(!updated);
    fetch("http://localhost:9292/schedules", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(schedule),
    });
    // console.log([...plannedSchedule,schedule])
    // setPlannedSchedule([...plannedSchedule,schedule]);
  }

  useEffect(() => {
    fetch("http://localhost:9292/schedules")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setPlannedSchedule(data);
      });
  }, [updated]);

  return (
    <div className="relative flex flex-col rounded bg-white shadow-lg w-[90%] justify-around mt-72 md:mt-72 ml-5">
      <div className="relative flex flex-col xsm:flex-row items-center justify-around">
        <div className="flex flex-col justify-between h-26"></div>
        <div className="flex flex-col justify-between h-26">
          <label htmlFor="schedule">Choose Schedule</label>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
            <label htmlFor="destination">Choose a Destination:</label>
            <select
              name="destination_id"
              id="destination"
              onChange={handleSchedule}
              className="h-10 border-solid border border-gray-400 rounded mx-2 outline-none"
            >
              {destinations.map((destination, index) => {
                // console.log(destination)
                // console.log(destination.id)
                // console.log(destination.name)
                return (
                  <option key={index} value={destination.id}>
                    {destination.name}
                  </option>
                );
              })}
            </select>
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
            <select
              name="user"
              id="user"
              onChange={handleSchedule}
              className="h-10 border-solid border border-gray-400 rounded mx-2 outline-none hover:border-gray-500"
            >
              {user}
            </select>
            <input
              type="submit"
              value="Schedule Safari"
              className="text-white bg-blue-500 px-5 py-2 font-bold hover:bg-blue-700"
            />
          </form>
        </div>
      </div>
      <div>
        <h1>Planned Schedules</h1>
        {plannedSchedule.map((element) => {
          return (
            <div className="flex justify-evenly">
              <h2 className="w-[20em] font-bold border p-2 text-gray-600">
                Destination: {element.destination.name}
              </h2>
              <h2 className="w-[20em] font-bold border p-2 text-gray-600">
                Scheduled for: {element.day}
              </h2>
              <h2 className="w-[20em] font-bold border p-2 text-gray-600">Time: {element.time}</h2>
              <h2 className="w-[20em] font-bold border p-2 text-gray-600">
                Location: {element.destination.location}
              </h2>
              <h2 className="w-[20em] font-bold border p-2 text-gray-600">
                Ticket Price: {element.destination.price}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Destination;
