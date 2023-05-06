import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const URL = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductsCategory = (catName) => {
    fetch(`${URL}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center pt-4 pb-5">Our Products</h2>
      <div className="container">
        <div className="text-center">
          <button
            onClick={() => {
              getProducts();
            }}
            className="btn btn-info"
          >
            All
          </button>
          {categories.map((cat) => {
            return (
              <>
                <button
                  key={cat}
                  onClick={() => {
                    getProductsCategory(cat);
                  }}
                  className="btn btn-info mx-1"
                >
                  {cat}
                </button>
              </>
            );
          })}
        </div>

        <div className="row pt-5 row-gap-4">
          {products.map((product) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-3">
                <Product product={product} key={product.id} showButton={true} showDescription = {false} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
