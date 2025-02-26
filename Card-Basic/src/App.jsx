// import NetflixSeries from "./componets/NetflixSeries";
// import styles from "./componets/Netflix.module.css";
import { ThemeProvider } from "styled-components";
// import EventHandling from "./componets/EventHandling";
// import { EventHandlingProps } from "./componets/EventHandlingProps";
import { EventPropogation } from "./componets/EventPropogation";

export const App = () => {
  const theme = {
    colors: {
      primary: "#ff0000",
      background: "#000",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    // <></> Sugar Formate
    <ThemeProvider theme={theme}>
      <section className="container">
        {/* <h1 className={styles["card-heading"]}>List Of Best Series</h1>
        <NetflixSeries /> */}
        {/* <EventHandling /> */}
        {/* <EventHandlingProps /> */}
        <EventPropogation />
      </section>
    </ThemeProvider>
  );
};
