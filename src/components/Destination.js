import { useState, useEffect } from "react";

const Destination = ({ destinations }) => {
  const [schedule, setSchedule] = useState({
    destination: "Maasai Mara",
    time: "4am",
    day: "monday",
  });

  const areas = destinations.map((destination, index) => {
    return (
      <option key={index} value={destination.name}>
        {destination.name}
      </option>
    );
  });

  function handleSchedule(event) {
    const name = event.target.name;
    const value = event.target.value;
    setSchedule({ ...schedule, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(schedule);
    // useEffect(()=>{
    //   fetch()
    // },[])
  }

  return (
    <div className="relative flex items-center bg-gray-100 w-6/12 justify-around mt-96 ml-14 h-24">
      <div className="flex flex-col justify-between h-16">
        <label htmlFor="destination">Choose a Destination:</label>
        <select name="destination" id="destination" onChange={handleSchedule}>
          {areas}
        </select>
      </div>
      <div className="flex flex-col justify-between h-16">
        <label htmlFor="schedule">Choose Schedule</label>
        <form onSubmit={handleSubmit}>
          <select name="time" id="time" onChange={handleSchedule}>
            <option value="4am">4am</option>
            <option value="9am">9am</option>
            <option value="4pm">4pm</option>
            <option value="9pm">9pm</option>
          </select>
          <select name="day" id="day" onChange={handleSchedule}>
            <option value="monday">monday</option>
            <option value="tuesday">tuesday</option>
            <option value="wednesday">wednesday</option>
            <option value="thursday">thursday</option>
            <option value="friday">friday</option>
            <option value="saturday">saturday</option>
            <option value="sunday">sunday</option>
          </select>
          <input type="submit" value="Button" />
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Destination;
