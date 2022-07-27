import React from "react";
import { Link } from "react-router-dom";

import { useContext, useState, useEffect } from "react";
import axios from "axios";
//
import productContext from "./context/product-context";
import { differentCategory } from "./components/function";
import Section from "./components/Section";

const ProductTable = () => {
  const { products } = useContext(productContext);
  const [currentProducts, setCurrentProducts] = useState([products]);
  const [newCateg, setNewCateg] = useState([]);
  let newArray = [];
  let array;

  const getProducts = async () => {
    if (products.length === 0) {
      const { data } = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      setCurrentProducts(data.products);
      products.push(data);
      if (products.length > 1) {
        products.splice(1, products.length);
      }
      array = differentCategory(currentProducts[0][0].products);
      if (newCateg.length === 0) {
        array.map((e) => newArray.push(e.category));
      }
      setNewCateg(newArray);
      newArray = [];
      //
    } else {
      array = differentCategory(currentProducts[0][0].products);
      if (newCateg.length === 0) {
        array.map((e) => newArray.push(e.category));
      }
      setNewCateg(newArray);
      newArray = [];
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1 className="text-center">SHOPPING</h1>
      <Link to="/">
        <button type="button" className="btn btn-primary">
          Go Back
        </button>
      </Link>
      {newCateg.map((category, key) => {
        const product = products[0].products.filter(
          (prod) => prod.category === category
        );
        return <Section product={product} key={`newID${key}`} />;
      })}
    </div>
  );
};

export default ProductTable;
