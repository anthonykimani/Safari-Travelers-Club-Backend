const Journey = () => {
    return ( 
        <div className="flex justify-around mt-10 px-10 ">
            <div className="w-1/2 flex flex-col justify-around">
                <h1 className="text-4xl font-extrabold w-[90%]">Over 100 different locations to visit</h1>
                <h3 className="text-gray-500">A whole new experience through the eyes of Africa</h3>
                <button className="bg-blue-500 text-white px-2 py-3 w-52">see more</button>
            </div>
            <img src={process.env.PUBLIC_URL + "/desert-journey.jpg"} alt="" className="w-1/2 h-auto" />
        </div>
     );
}
 
export default Journey;