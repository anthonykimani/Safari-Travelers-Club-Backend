const Find = () => {
  return (
    <div className="flex flex-col justify-around  mt-10 px-2 md:flex-row">
      <img
        src={process.env.PUBLIC_URL + "/pina-coladas.jpg"}
        alt=""
        className="w-[96] h-[102] rounded-md md:w-[48%] md:h-[52]"
      />
      <div className="w-[100%] p-2 flex flex-col justify-around md:300px">
        <h1 className="text-3xl font-extrabold w-[100%]">
          Enjoy the White Sands in the Coast
        </h1>
        <h3 className="text-gray-500">
          The best the coast has to offer
        </h3>
        <button className="bg-blue-500 text-white px-1 py-1 w-[100px]">
          see more
        </button>
      </div>
    </div>
  );
};

export default Find;
