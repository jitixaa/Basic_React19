import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul style={{ listStyleType: "none", padding: "10px" }}>
      {seriesData.map((currElement) => (
        <SeriesCard key={currElement.id} currElement={currElement} />
      ))}
    </ul>
  );
};

export default NetflixSeries;
