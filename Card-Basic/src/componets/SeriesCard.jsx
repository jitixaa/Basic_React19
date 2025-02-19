export const SeriesCard = ({ data }) => {
  const { id, img_url, name, rating, description, genre, cast, watch_url } =
    data;

  return (
    <li>
      <img src={img_url} alt={name} width="40%" height="40%" />
      <h2>Name : {name} </h2>
      <h3>Rating : {rating} </h3>
      <p>Summary : {description}</p>
      <p>Genre : {genre}</p>
      <p>Cast : {cast}</p>

      <a href={watch_url}>
        <button>Watch Now</button>
      </a>
    </li>
  );
};
