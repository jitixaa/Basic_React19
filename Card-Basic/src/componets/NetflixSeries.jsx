import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
// import "../componets/NetflixSeries.css";
import "../componets/Netflix.module.css";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three-cols">
      {seriesData.map((currElement) => (
        <SeriesCard key={currElement.id} data={currElement} />
      ))}
    </ul>
  );
};

export default NetflixSeries;
