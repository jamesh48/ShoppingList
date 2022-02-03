import RunningTotal from "components/RunningTotal/RunningTotal";
import type { NextPage } from "next";

import Head from "next/head";
import TodoContainer from "../components/todos/TodoContainer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping List</title>
        <meta name="description" content="Todos with all the fixins" />
      </Head>

      <main className={styles.main}>
        <TodoContainer />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
