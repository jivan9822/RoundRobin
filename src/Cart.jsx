import classes from './cart.module.css';

const Cart = (props) => {
  return <div className={classes.mainDiv}>{props.children}</div>;
};
export default Cart;
