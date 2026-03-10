import { connect } from "react-redux";
import CartItem from "../cartItem/index";
import styles from "./styles.module.css";

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className={styles.items}>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <h4 className={styles.total}>Total: ${total.toFixed(2)}</h4>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps)(Cart);
