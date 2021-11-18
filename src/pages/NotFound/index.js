import { useEffect } from "react";
import { Result } from "antd";

import classes from "./styles.module.scss";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found";
  }, []);
  return (
    <Result
      className={classes.notFound}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
  );
};

export default NotFound;
