const Destination = ({destinations}) => {
  // const [destinations, setDestinations] = useState([]);
  // const [travelData,setTravelData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:9292/destinations")
  //   .then((response)=>response.json())
  //   .then((data) =>{
  //     console.log(data);
  //     setDestinations(data);
  //   });
  // },[]);

  // function travelInfo(data){
  //   console.log(data);
  //   return setTravelData(data);
  // }

  // console.log(travelData);
  
  const areas = destinations.map((destination,index) =>{
    return <option key={index} value={destination.name}>{destination.name}</option>
  })

  return (
    <div className="relative flex items-center bg-gray-100 w-6/12 justify-around mt-96 ml-14 h-24">
      <div className="flex flex-col justify-between h-16">
        <label htmlFor="destination">Choose a Destination:</label>
        <select name="destination" id="destination">
          {areas}
        </select>
      </div>
      <div className="flex flex-col justify-between h-16">
        <label htmlFor="schedule">Choose Schedule</label>
        <div className="">
          <select name="time" id="time">
            <option value="4am">4am</option>
            <option value="9am">9am</option>
            <option value="4pm">4pm</option>
            <option value="9pm">9pm</option>
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
          <button>Book Safari</button>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Destination;
