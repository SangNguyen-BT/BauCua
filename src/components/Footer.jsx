import Button from "./Button";

const Footer = (props) => {
  const { reset, disable, resultMessage } = props;
  return (
    <>
      <Button name="Reset" action={reset} disable={disable} />
      
      <div className="px-4">
        <p className="font-bold">Notice:</p>
        <div className="font-bold">
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
        </div>

        <div className="text-center pt-3 text-red-600 text-lg font-bold">
          <p>{resultMessage}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
