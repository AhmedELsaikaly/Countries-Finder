import { Button } from "antd";
import classes from "./styles.module.scss";

const CustomButton = ({ children, ...props }) => {
  return (
    <Button {...props} className={classes.btn}>
      {children}
    </Button>
  );
};

export default CustomButton;
