import React from "react";
import styles from "../styles/Home.module.css";
import Listing from "../src/views/Listing/Listing";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Link from "next/link";

const ListingPage = () => {
  return (
    <div>
      <NavBar />
      <Head>
        <title>Listing</title>
      </Head>
      <h1 className={styles.title}>
        <Link href="/">
          <a>Listing !</a>
        </Link>
      </h1>
      <Listing />
    </div>
  );
};

export default ListingPage;
