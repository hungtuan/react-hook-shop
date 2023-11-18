import React, { useEffect, useContext } from "react";
import CardItem from "./CardItem";
import getProductList from "./getProductList";
import validateUser from "../../assets/js/validateUser";
import Context from "../../store/Context";

export default function CardList() {
  const [state, dispatch] = useContext(Context);

  const { products } = state;

  const getProduct = async () => {
    try {
      await dispatch({
        type: "loading/switch",
      });

      const data = await getProductList();

      await dispatch({
        type: "products/updateProducts",
        payload: data.listProduct, // Assuming the list of products is under the 'listProduct' property
      });

      await validateUser();

      dispatch({
        type: "loading/switch",
      });
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="card-list grid grid-cols-4 gap-4">
      {products.map((product) => (
        <CardItem
          key={product._id}
          id={product._id}
          productName={product.name}
          productPrice={product.price}
          productImg={product.image}
          productQuantity={product.quantity}
        />
      ))}
    </div>
  );
}
