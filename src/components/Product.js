import './Product.css'
import { Link } from "react-router-dom";

function Product(props) {
  const { product, showButton, showDescription } = props;
  return (
    <>
      <div className="card align-items-cente pt-2">
        <img src={product.image} className="card-img-top imag" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          {showDescription && (
            <p className="card-text w-50">{product.description}</p>
          )}
          <p>Price: {product.price}</p>
          {showButton && (
            <Link className="btn btn-primary" to={`/product/${product.id}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Product;
