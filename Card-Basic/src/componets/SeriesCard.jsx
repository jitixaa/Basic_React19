import styles from "../componets/Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = ({ data }) => {
  const { id, img_url, name, rating, description, genre, cast, watch_url } =
    data;

  // Inline CSS apply for the button
  // const btn_style = {}

  //Styled-componetns
  // const Button = styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#79eb79" : "#e7e76b"}`,
  //   color: "var(--btn-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  // });

  //Styled-componetns using literal
  const Button = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#79eb79" : "#e7e76b"};
    color: var(--btn-color);
    font-weight: bold;
    cursor: pointer;
  `;

  // Apply css condition like this way
  const ratingClass = rating >= 8.5 ? styles["super-hit"] : styles.average;

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      <div className={styles["card-content"]}>
        <h3>Name : {name} </h3>
        <h4>
          Rating :
          <span className={`${styles.rating} ${ratingClass} `}>{rating}</span>
          {/* Apply css condition using class  */}
          {/* <span
            className={`rating ${rating >= 8.5 ? "super-hit" : "average"} `}
          >
            {rating}
          </span> */}
        </h4>
        <p>Summary : {description}</p>
        <p>Genre : {genre.join(", ")}</p>
        <p>Cast : {cast.join(", ")}</p>

        <a href={watch_url}>
          {/* <button style={btn_style}>Watch Now</button> */}
          <Button rating={rating}>Watch Now</Button>
        </a>
      </div>
    </li>
  );
};
