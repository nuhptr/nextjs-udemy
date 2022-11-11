import type { NextPage } from "next";
import Image from "next/image";

import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Layout pageTittle="Learn NextJS | Home">
        <Image src={"/Photo.png"} width={200} height={200} alt="profile" />
        <h1 className={styles["title-homepage"]}>Welcome Adi</h1>
      </Layout>
    </>
  );
};

export default Home;
