import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import classes from "./styles.module.scss";

const LoadingSuspense = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className={classes.loadingSuspense}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default LoadingSuspense;
