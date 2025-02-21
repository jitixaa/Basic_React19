import NetflixSeries from "./componets/NetflixSeries";
import styles from "./componets/Netflix.module.css";

export const App = () => {
  return (
    // <></> Sugar Formate
    <section className="container">
      <h1 className={styles["card-heading"]}>List Of Best Series</h1>
      <NetflixSeries />
    </section>
  );
};
