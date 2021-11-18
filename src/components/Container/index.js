import classes from "./styles.module.scss";

const Container = ({ children, fluid }) => {
  return (
    <div className={fluid ? classes.containerFluid : classes.container}>
      {children}
    </div>
  );
};

export default Container;
