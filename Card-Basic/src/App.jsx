import NetflixSeries from "./componets/NetflixSeries";

export const App = () => {
  return (
    // <></> Sugar Formate
    <section className="container">
      <h1 className="card-heading">List Of Best Series</h1>
      <NetflixSeries />
    </section>
  );
};
