import { useState, useEffect } from "react";
import { getProductData } from "../services/asyncMock";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  async function requestProduct() {
    const res = await getProductData(id);
    setProduct(res);
  }

  useEffect(() => {
    requestProduct();
  }, []);

  // return <ItemDetail product={product} />;
  return (
    <>
      <div>
        <img width={600} src={product.img} alt="imagen"></img>
      </div>
      <div>
        <h2>{product.title}</h2>
      </div>
      <div>
        <h4>$ {product.price}</h4>
        <small>{product.description}</small>
      </div>
    </>
  );
}

export default ItemDetailContainer;