const TravelCard = ({ img, name="Mara", location = "kenya", price = 54 }) => {
  return (
    <div className="">
      <div className="w-80 h-80 overflow-hidden">
        <img
          src={process.env.PUBLIC_URL + img}
          alt=""
          className=""
        />
      </div>
      <h3 className="font-bold text-2xl mt-4">{name}</h3>
      <div className="flex justify-between text-gray-500">
        <h4>{location}</h4>
        <h4>{price}$/person</h4>
      </div>
      <button className="bg-sky-600 text-white px-4 py-2">Book now</button>
    </div>
  );
};

export default TravelCard;
