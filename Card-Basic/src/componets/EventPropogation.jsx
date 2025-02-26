import "../componets/EventHandling.css";
export const EventPropogation = () => {
  const handleGrandParent = () => {
    console.log("Welcome Grand Parent");
  };
  const handleParentClick = () => {
    console.log("Welcome tp Parent Click");
  };
  const handleChildClick = (event) => {
    console.log(event);
    event.stopPropagation();
    console.log("Child Clicked");
  };
  return (
    <section className="main-div">
      <div className="g-div" onClickCapture={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
          <button className="c-div" onClickCapture={handleChildClick}>
            Chlid Div
          </button>
        </div>
      </div>
    </section>
  );
};
