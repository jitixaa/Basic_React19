import "../componets/EventHandling.css";
export const EventHandlingProps = () => {
  const handleClickMe = (user) => {
    console.log(`Hello I am ${user}`);
  };
  const handleHover = () => {
    alert("I am hoving my mouse");
  };
  return (
    <>
      <WelcomeUser
        onClick={() => handleClickMe("Jitixa")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

export const WelcomeUser = (props) => {
  const { onClick, onMouseEnter } = props;

  const handleGreeting = (user) => {
    console.log(`Hello How are you ! I am ${user}`);
    onClick();
  };

  return (
    <>
      <button onClick={onClick}>Click Me</button>
      <button onMouseEnter={onMouseEnter}>Mouse Hover</button>
      <button onClick={() => handleGreeting("Jitixa")}>Greeting Button</button>
    </>
  );
};
