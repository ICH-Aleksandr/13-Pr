import styles from "./styles.module.css";

import { connect } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../../redux/actions/index";

function CartItem({ item, removeFromCart, updateCartQuantity }) {
  return (
    <div className={styles.row}>
      <span>
        {item.name} ${item.price}.00
      </span>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) => updateCartQuantity(item.id, parseInt(e.target.value))}
        className={styles.input}
      />
      <button
        className={styles.removeBtn}
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  updateCartQuantity: (id, quantity) =>
    dispatch(updateCartQuantity(id, quantity)),
});

export default connect(null, mapDispatchToProps)(CartItem);
