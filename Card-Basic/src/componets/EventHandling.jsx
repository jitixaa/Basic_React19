const EventHandling = () => {
  //   function handleButtonClick() {
  //     alert("Hello ! How are you");
  //   }

  const handleButtonClick = (event) => {
    console.log(event);

    alert("Hello ! How are you hello");
  };

  const handleWelcomeUser = (user) => {
    console.log(`Hello ${user} Welcome !`);
  };

  return (
    <div>
      {/* // ?  Function Components with Named Functions - Subscribe to Thapa Technical Youtube Channel  */
      /* Remember how we haven't called this function, if you call this function here  then it will run without even clicking. You just need to pass reference and not call here. */}
      <button onClick={handleButtonClick}>click Me</button>
      <br />
      <br />
      {/* In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly in the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler function. This is because the arrow function creates a new function and calls your handler without passing any arguments. */}
      <button onClick={(event) => handleButtonClick(event)}>
        Click Me Second
      </button>
      <br />
      <br />
      {/* /* //? Inline Event Handlers} */}
      <button onClick={(event) => console.log(event)}>Click Me Third</button>
      <br />
      <br />
      {/* //? Function Components with Inline Arrow Functions */}
      <button onClick={(event) => alert(event)}>Click Me Fourth</button>
      <br />
      <br />
      {/* {/* //? Passing Arguments to Event Handlers } */}
      {/* <button onClick={handleButtonClick}>Click Me</button> */}
      <button onClick={() => handleWelcomeUser("Jitixaa kothiya")}>
        Click Me
      </button>
      <button onClick={() => handleWelcomeUser("Punita kothiya")}>
        Click Me
      </button>
    </div>
  );
};

export default EventHandling;
