import Button from "./Button";

const Footer = (props) => {
  const {reset, disable, resultMessage} = props
  return (
    <>
      <Button name="Reset" action={reset} disable={disable}/>

      <strong>Notice:</strong>
      <strong>
        <p>
          Click on the picture that you would like to place, total of number you
          can place is 3
        </p>
        <p>
          After spinning, you need to match all 3 of the pictures in the Result
          to pass (No need to be exact order)
        </p>
        <p>Good Luck!</p>
      </strong>

      <div className="text-center mt-7 text-red-600 text-lg">
        <strong>{resultMessage}</strong>
      </div>
    </>
  );
};

export default Footer;
