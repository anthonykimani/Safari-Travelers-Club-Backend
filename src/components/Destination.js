const Destination = () => {
  return (
    <div className="relative flex items-center bg-gray-100 w-6/12 justify-around mt-96 ml-14 h-24">
      <div className="flex flex-col justify-between h-16">
        <label htmlFor="destination">Choose a Destination:</label>
        <select name="destination" id="destination">
          <option value="Mombasa">Mombasa</option>
          <option value="Kisumu">Kisumu</option>
        </select>
      </div>
      <div className="flex flex-col justify-between h-16">
        <label htmlFor="schedule">Choose Schedule</label>
        <div className="">
            <select name="day" id="day">
                <option value="6am">6am</option>
                <option value="7am">7am</option>
            </select>
            <select name="day" id="day">
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
    </div>
  );
};

export default Destination;
