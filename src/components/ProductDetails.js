import { useEffect, useState } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  const URL = "https://fakestoreapi.com/products";
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch(`${URL}/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.productId]);

  return(
    <>
      <Product product={products} showButton={false} showDescription = {true}/>
    </>
  )
}
export default ProductDetails;
