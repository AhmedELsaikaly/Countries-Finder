import { Result } from "antd";

import classes from "./styles.module.scss";

const NotFound = () => {
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
