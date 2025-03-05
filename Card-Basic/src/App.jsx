import { ThemeProvider } from "styled-components";
import { State } from "./componets/hooks/State";
import "./componets/EventHandling.css";

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
        <State />
      </section>
    </ThemeProvider>
  );
};
