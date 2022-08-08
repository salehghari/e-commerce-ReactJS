import { useParams } from "react-router-dom";
import { getProduct } from "../data";

export default function Product() {
  let params = useParams();
  let product = getProduct(params.productId);
  console.log(getProduct(params.productId))
  return (
    <main style={{ padding: "1rem" }}>
      <h2>{product.price}</h2>
      <p>{product.name}: {product.id}</p>
    </main>
  )
}
