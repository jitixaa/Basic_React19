export const SeriesCard = (props) => {
  return (
    <li>
      <img
        src={props.currElement.img_url}
        alt={props.currElement.alt}
        width="40%"
        height="40%"
      />
      <h2>Name : {props.currElement.name} </h2>
      <h3>Rating : {props.currElement.rating} </h3>
      <p>Summary : {props.currElement.description}</p>
      <p>Genre : {props.currElement.genre}</p>
      <p>Cast : {props.currElement.cast}</p>

      <a href={props.currElement.watch_url}>
        <button>Watch Now</button>
      </a>
    </li>
  );
};
