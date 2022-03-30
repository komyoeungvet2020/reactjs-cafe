import React from "react";
import styles from "../../../styles/Home.module.css";
import {Grid} from "@material-ui/core";

const data = [
  {
    title: "Ice late",
    price: "300.00$",
    id: 1,
  },
  {
    title: "Ice Capu",
    price: "400.00$",
    id: 2,
  },
];

const Detail = () => {
  return (
    <Grid container direction="row">
      {data.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
          <div className={styles.card_Item}>
            <h3>{item.title} &rarr;</h3>
            <p>{item.price}</p>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Detail;
