import Button from "./Button";

const Footer = (props) => {
  const { reset, disable, resultMessage } = props;
  return (
    <>
      <Button name="Reset" action={reset} disable={disable} />
      
      <div className="px-4">
        <strong>Notice:</strong>
        <strong>
          <p>
            Click on the picture that you would like to place, total of number
            you can place is 3.
          </p>
          <p>
            The number of the picture you place is the quantity of that shown in
            the Result.
          </p>
          <p>Match all 3 and you will pass (No need to be exact order)</p>
          <p>Good Luck!</p>
        </strong>

        <div className="text-center mt-7 text-red-600 text-lg">
          <strong>{resultMessage}</strong>
        </div>
      </div>
    </>
  );
};

export default Footer;
