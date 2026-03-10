import styles from "./styles.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/index";

function ProductList({ products, addToCart }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Products</h2>
      <div className={styles.list}>
        {products.map((product) => (
          <div key={product.id} className={styles.row}>
            <span>
              {product.name} ${product.price}.00
            </span>
            <button
              className={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ products: state.products });
const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
