import { useParams } from "react-router-dom";
import { getProduct } from "../data";

export default function Product() {
  let params = useParams();
  let product = getProduct(params.productId);
  return (
    <div className="Product d-flex row center">
      <img className="details--product-image" src={`../images/${product.image}`} alt={product.name} />
      <div className="details d-flex column">
        <h1 className="details--product-title">{product.name} {product.model} {product.screenSize} inches laptop</h1>
        <div style={{marginTop: "15px", marginBottom: "10px"}} className="d-flex row center">
          <p style={{marginRight: "8px", color: "#c0c2c5", fontSize: "14px"}}>{product.name} {product.model}</p>
          <hr />
        </div>
        <span style={{fontSize: "28px"}} className="product-price">{product.price}</span>
        <ul style={{marginTop: "10px"}}>
          <li style={{marginBottom: "4px"}} className="d-flex">
            <div style={{padding: "0 5px"}} class="d-flex center">
              <div style={{width: "5px", height: "5px", backgroundColor: "#a1a3a8", borderRadius: "50%"}}></div>
            </div>
            <p style={{fontSize:"16px", lineHeight: "30px", color: "#81858b"}}>Brand :</p>
            <p style={{fontSize: "16px", fontWeight: "700", lineHeight: "30px",color: "#424750", marginLeft: "8px"}}>{product.brand}</p>
          </li>

          <li style={{marginBottom: "4px"}} className="d-flex">
            <div style={{padding: "0 5px"}} class="d-flex center">
              <div style={{width: "5px", height: "5px", backgroundColor: "#a1a3a8", borderRadius: "50%"}}></div>
            </div>
            <p style={{fontSize:"16px", lineHeight: "30px", color: "#81858b"}}>Series :</p>
            <p style={{fontSize: "16px", fontWeight: "700", lineHeight: "30px",color: "#424750", marginLeft: "8px"}}>{product.series}</p>
          </li>

          <li style={{marginBottom: "4px"}} className="d-flex">
            <div style={{padding: "0 5px"}} class="d-flex center">
              <div style={{width: "5px", height: "5px", backgroundColor: "#a1a3a8", borderRadius: "50%"}}></div>
            </div>
            <p style={{fontSize:"16px", lineHeight: "30px", color: "#81858b"}}>Screen Size :</p>
            <p style={{fontSize: "16px", fontWeight: "700", lineHeight: "30px",color: "#424750", marginLeft: "8px"}}>{product.screenSize}</p>
          </li>

          <li style={{marginBottom: "4px"}} className="d-flex">
            <div style={{padding: "0 5px"}} class="d-flex center">
              <div style={{width: "5px", height: "5px", backgroundColor: "#a1a3a8", borderRadius: "50%"}}></div>
            </div>
            <p style={{fontSize:"16px", lineHeight: "30px", color: "#81858b"}}>Color :</p>
            {product.colorText.map(colorText => (
              <p style={{fontSize: "16px", fontWeight: "700", lineHeight: "30px",color: "#424750", marginLeft: "8px"}}>{colorText}</p>
            ))}
          </li>

          <li style={{marginBottom: "4px"}} className="d-flex">
            <div style={{padding: "0 5px"}} class="d-flex center">
              <div style={{width: "5px", height: "5px", backgroundColor: "#a1a3a8", borderRadius: "50%"}}></div>
            </div>
            <p style={{fontSize:"16px", lineHeight: "30px", color: "#81858b"}}>Hard Disk Size :</p>
            <p style={{fontSize: "16px", fontWeight: "700", lineHeight: "30px",color: "#424750", marginLeft: "8px"}}>{product.hardDiskSize}</p>
          </li>
          
          <li style={{marginBottom: "4px"}} className="d-flex">
            <div style={{padding: "0 5px"}} class="d-flex center">
              <div style={{width: "5px", height: "5px", backgroundColor: "#a1a3a8", borderRadius: "50%"}}></div>
            </div>
            <p style={{fontSize:"16px", lineHeight: "30px", color: "#81858b"}}>CPU Model :</p>
            <p style={{fontSize: "16px", fontWeight: "700", lineHeight: "30px",color: "#424750", marginLeft: "8px"}}>{product.CPUModel}</p>
          </li>

          <li style={{marginBottom: "4px"}} className="d-flex">
            <div style={{padding: "0 5px"}} class="d-flex center">
              <div style={{width: "5px", height: "5px", backgroundColor: "#a1a3a8", borderRadius: "50%"}}></div>
            </div>
            <p style={{fontSize:"16px", lineHeight: "30px", color: "#81858b"}}>Ram Memory Installed Size :</p>
            <p style={{fontSize: "16px", fontWeight: "700", lineHeight: "30px",color: "#424750", marginLeft: "8px"}}>{product.ramMemorySize}</p>
          </li>

          <li style={{marginBottom: "4px"}} className="d-flex">
            <div style={{padding: "0 5px"}} class="d-flex center">
              <div style={{width: "5px", height: "5px", backgroundColor: "#a1a3a8", borderRadius: "50%"}}></div>
            </div>
            <p style={{fontSize:"16px", lineHeight: "30px", color: "#81858b"}}>Operating System :</p>
            <p style={{fontSize: "16px", fontWeight: "700", lineHeight: "30px",color: "#424750", marginLeft: "8px"}}>{product.operatingSystem}</p>
          </li>

          <li style={{marginBottom: "4px"}} className="d-flex">
            <div style={{padding: "0 5px"}} class="d-flex center">
              <div style={{width: "5px", height: "5px", backgroundColor: "#a1a3a8", borderRadius: "50%"}}></div>
            </div>
            <p style={{fontSize:"16px", lineHeight: "30px", color: "#81858b"}}>Card Description :</p>
            <p style={{fontSize: "16px", fontWeight: "700", lineHeight: "30px",color: "#424750", marginLeft: "8px"}}>{product.cardDescription}</p>
          </li>

          <li style={{marginBottom: "4px"}} className="d-flex">
            <div style={{padding: "0 5px"}} class="d-flex center">
              <div style={{width: "5px", height: "5px", backgroundColor: "#a1a3a8", borderRadius: "50%"}}></div>
            </div>
            <p style={{fontSize:"16px", lineHeight: "30px", color: "#81858b"}}>Graphics Coprocessor :</p>
            <p style={{fontSize: "16px", fontWeight: "700", lineHeight: "30px",color: "#424750", marginLeft: "8px"}}>{product.graphicsCoprocessor}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
