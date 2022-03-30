import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import { Grid} from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3 className={styles.title}>
        Welcome to{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </h3>

      <Grid container>
        <Grid item sm={12} md={6}>
          <Link href="/listing" passHref>
            <div className={styles.card_home}>
              <h3>Listing &rarr;</h3>
              <p>
                Welcome to Listing.
              </p>
            </div>
          </Link>
        </Grid>
        <Grid item sm={12} md={6}>
          <Link href="/detail" passHref>
            <div className={styles.card_home}>
              <h3>Detail &rarr;</h3>
              <p>Welcome to Detail!</p>
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
