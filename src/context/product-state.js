import react from "react";
import ProductContext from "./product-context";

const ProductState = (props) => {
  const state = {
    products: [],
    cart: [],
    mainCategory: [],
    mainRating: [],
  };
  return (
    <ProductContext.Provider value={state}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
