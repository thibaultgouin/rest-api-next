import type { NextPage } from "next";
import Layout from "../components/layout/Layout";
import B02Countries from "../components/blocks/b02-countries/B02Countries";
import M03SearchBar from "../components/molecules/m03-search-bar/M03SearchBar";
import M04Filter from "../components/molecules/m04-filter/M04Filter";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
  return (
    <Layout title="Next Homepage" description="Description for homepage">
      <div className={styles.homepage}>
        <div className={styles.search}>
          <M03SearchBar />
          <M04Filter />
        </div>
        <div className={styles.main}>
          <B02Countries />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
