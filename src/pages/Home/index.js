import CountriesTable from "../../components/CountriesTable";
import { useEffect } from "react";
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
