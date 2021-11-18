import { useEffect } from "react";
import CountriesTable from "../../components/CountriesTable";

import classes from "./styles.module.scss";

const Home = () => {
  useEffect(() => {
    document.title = "Countries Finder";
  }, []);

  return (
    <main className={classes.main}>
      <CountriesTable />
    </main>
  );
};

export default Home;
