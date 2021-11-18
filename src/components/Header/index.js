import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import classes from "./styles.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to={ROUTES.HOME}> Countries Finder</Link>
    </header>
  );
};

export default Header;
