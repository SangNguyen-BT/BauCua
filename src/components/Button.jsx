const Button = (props) => {
  return (
    <div className="text-end pr-2">
      <button
        className="py-2.5 px-3.5 bg-[#61d18c] rounded-lg font-extrabold cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
        onClick={props.action}
        disabled={props.disable}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
