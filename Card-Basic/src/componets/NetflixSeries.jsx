import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
  return (
    <ul style={{ listStyleType: "none", padding: "10px" }}>
      {seriesData.map((currElement1) => {
        return (
          <li key={currElement1.id}>
            <img
              src={currElement1.img_url}
              alt={currElement1.alt}
              width="20%"
              height="20%"
            />
            <h2>Name : {currElement1.name} </h2>
            <h3>Rating : {currElement1.rating} </h3>
            <p>Summary : {currElement1.description}</p>
            <p>Genre : {currElement1.genre}</p>
            <p>Cast : {currElement1.cast}</p>

            <a href={currElement1.watch_url}>
              <button>Watch Now</button>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NetflixSeries;
