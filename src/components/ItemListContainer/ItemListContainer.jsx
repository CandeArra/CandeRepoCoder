import { useState, useEffect } from "react";
import getData, { getCategoryData } from "../services/asyncMock";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  async function requestProducts() {
    let respuesta = categoryId
      ? await getCategoryData(categoryId)
      : await getData();
    setProducts(respuesta);
  }

  useEffect(() => {
    requestProducts();
  }, [categoryId]);

  return (
    <div>
      <h1 className="tituloIndum">Indumentaria de Oversity Store</h1>
      <div className="flex-container">
        {products.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;