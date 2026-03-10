import styles from "./styles.module.css";

import { connect } from "react-redux";
import CartItem from "../cartItem/index";

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <h4>Total: ${total.toFixed(2)}</h4>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps)(Cart);
