import { Outlet, Link, useSearchParams } from "react-router-dom";
import { getProducts } from "../data";

export default function Products() {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="Products">
      <div className="search-bar">
        <input
          type="text"
          value={searchParams.get("filter") || ""}
          placeholder="Search..."
          onChange={(event) => {
            const filter = event.target.value;
            if(filter) {
              setSearchParams({ filter })
            } else {
              setSearchParams({})
            }
          }}
        />
      </div>
      <Outlet />
      <div className="products-card d-flex">
          {products.filter((product) => {
            const filter = searchParams.get("filter");
            if(!filter) {return true};
            const name = product.name.toLowerCase();
            return name.startsWith(filter);
          })
          .map(product => (
            <div className="product-card">
              <div className="product-colors d-flex column">
                {product.color.map(color => ( 
                    <span style={{backgroundColor: color}} className="product-color"></span>
                ))}
              </div>
              <Link
                className="card-links"
                to={`/products/${product.id}`}
                key={product.id}
              >
                <div style={{gap: "10px", padding: "5px"}} className="d-flex column">
                  <img className="product-image" src={`images/${product.image}`} alt={product.name} />
                  <h2 className="product-title">{`${product.name} ${product.model} ${product.screenSize} inches laptop`}</h2>
                  <div style={{gap: "8px"}} className="d-flex row end">
                    <p style={{fontWeight: "500"}}>{product.score}</p>
                    <img className="star-image" src="images/star-image.svg" alt="" />
                  </div>
                  <div className="d-flex column">
                    <div style={{justifyContent: product.percentDiscount ? "space-between" : "flex-end"}} className="d-flex row end">
                      {product.percentDiscount && 
                      <div className="d-flex center product-discount">
                        <span>{`${product.percentDiscount}%`}</span>
                      </div>}
                      <div className="d-flex center">
                        <span className="product-price">{product.price}</span>
                      </div>
                    </div>
                    {product.previousPrice && 
                    <div className="d-flex">
                      <div className="product-previous-price">{`$${product.previousPrice}`}</div>
                    </div>}
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}
