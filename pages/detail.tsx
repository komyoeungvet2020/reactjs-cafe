import React from "react";
import styles from "../styles/Home.module.css";
import Detail from "../src/views/Detail/Detail";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Link from "next/link";

const DetailPage = () => {
  return (
    <div>
      <NavBar />
      <Head>
        <title>Detail</title>
      </Head>
      <h1 className={styles.title}>
        <Link href="/">
          <a>Detail !</a>
        </Link>
      </h1>
      <Detail />
    </div>
  );
};

export default DetailPage;
