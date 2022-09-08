const Options = ({name,filter}) => {
  return (
    <div>
      <button className="text-gray-500 border-solid border rounded-3xl px-4 py-1 border-gray-500 hover:border-gray-600 hover:bg-black hover:text-white mx-2" onClick={()=>filter(name)}>
        {name}
      </button>
    </div>
  );
};

export default Options;
