export const SeriesCard = ({ data }) => {
  const { id, img_url, name, rating, description, genre, cast, watch_url } =
    data;

  // Inline CSS apply for the button
  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: "var(--btn-hover-bg-color)",
    color: "var(--bg-color)",
  };

  return (
    <li className="card">
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      <div className="card-content">
        <h2>Name : {name} </h2>
        <h3>Rating : {rating} </h3>
        <p>Summary : {description}</p>
        <p>Genre : {genre.join(", ")}</p>
        <p>Cast : {cast.join(", ")}</p>

        <a href={watch_url}>
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
