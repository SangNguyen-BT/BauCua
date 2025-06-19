const Body = (props) => {
  const { choiceItems, increaseCount, disable } = props;

  return (
    <div className="flex flex-wrap justify-center gap-2.5 my-4">
      {choiceItems.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => increaseCount(index)}
            disabled={disable}
            className="relative h-[8rem] border border-black bg-white transition duration-500 transform hover:scale-110 active:scale-110 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <img
              src={`/${item.imgSrc}`}
              alt={item.id}
              className="max-w-full w-full h-[90%] py-2.5 px-5"
            />
            <span className="absolute top-2.5 left-2.5 font-bold">
              {item.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Body;
