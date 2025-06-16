import Button from "./Button";

const Header = (props) => {
  const { spinItems, spin, disable } = props;

  return (
    <>
      <div className="text-center flex justify-center flex-wrap gap-3 mb-4">
        {spinItems.map((img, index) => {
          return (
            <div key={index}>
              <img
                src={`/${img}`}
                alt={`img-${index}`}
                className="max-w-full w-full h-[100px] border border-black flex-grow flex-shrink-0 basis-auto"
              />
            </div>
          );
        })}
      </div>

      <Button name="Spin" action={spin} disable={disable}/>
    </>
  );
};

export default Header;
