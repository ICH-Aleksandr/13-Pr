import styles from "./styles.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/index";

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <span>
              {product.name}${product.price}.00
            </span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
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
