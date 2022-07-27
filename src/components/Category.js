import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./css/category.css";
//   
import productContext from "../context/product-context";
import Rating from "./Rating";

const Category = () => {
  const { oneCategory } = useParams();
  let { products, mainCategory } = useContext(productContext);
  const [currentProducts, setCurrentProducts] = useState([products]);
  const [newCategory, setNewCategory] = useState([]);

  //
  const getProducts = async () => {
    if (products.length === 0) {
      const { data } = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      setCurrentProducts(data.products);
      products.push(data.products);
      if (products.length > 1) {
        products.splice(1, products.length);
      }
    }

    filterCategory(oneCategory);
  };

  // filter by category
  const filterCategory = (category) => {
    if (products) {
      const result = currentProducts[0][0].products.filter((curData) => {
        return curData.category === category;
      });
      setNewCategory(result);
      mainCategory.push(result);
      if (mainCategory.length > 1) {
        mainCategory.splice(0, mainCategory.length - 1);
      }
    }
  };

  // filterByRating
  const filterByRating = (value1, value2) => {
    if (value1 === "All") {
      setNewCategory(mainCategory[0]);
      return;
    }
    // do filter here based on rating values here
    const result = mainCategory[0].filter((item) => {
      return item.rating >= value1 && item.rating <= value2;
    });
    setNewCategory(result);
  };

  // filter by price
  const priceFilter = (value1, value2) => {
    if (value1 === "All") {
      setNewCategory(mainCategory[0]);
      return;
    }
    const result = mainCategory[0].filter((item) => {
      return item.price >= value1 && item.price <= value2;
    });
    setNewCategory(result);
  };
  //
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Link to="/">
        <button type="button" className="btn btn-primary">
          Go Back
        </button>
      </Link>
      <div className="container text-center my-3">
        <div className="row align-items-start">
          <div className="col-md-3 my-2">
            <h2>
              <div>
                <h1>Price</h1>
                <div
                  className="btn-group-vertical col-md-12"
                  role="group"
                  aria-label="Vertical button group"
                >
                  <button
                    type="button"
                    className="btn btn-dark my-1"
                    onClick={() => priceFilter("0", "499")}
                  >
                    below 500
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark my-1"
                    onClick={() => priceFilter("500", "999")}
                  >
                    500-999
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark my-1"
                    onClick={() => priceFilter("1000", "1499")}
                  >
                    1000-1499
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark my-1"
                    onClick={() => priceFilter("1500", "1999")}
                  >
                    1500-1999
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark my-1"
                    onClick={() => priceFilter("2000", "2499")}
                  >
                    2000-2499
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark my-1"
                    onClick={() => priceFilter("2500", "1000000")}
                  >
                    Above 2500
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark my-1"
                    onClick={() => priceFilter("All", "none")}
                  >
                    All
                  </button>
                </div>
              </div>
            </h2>
            <h2>Rating</h2>

            <Rating filterByRating={filterByRating} />
          </div>

          <div className="col-md-8">
            <h2>{oneCategory}</h2>
            <div className="container">
              <div className="row">
                {newCategory.length !== 0 ? (
                  newCategory.map((e) => (
                    <div className="col-md-3 my-2" key={`Number${e.id}`}>
                      <div className="card" style={{ width: "12rem" }}>
                        <img
                          src={`${e.thumbnail}`}
                          className="card-img-top categoryImage"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{e.title}</h5>
                          <h5 className="card-title fw-bold">
                            PRICE:${e.price}
                          </h5>
                          <p className="card-text">
                            {e.description && e.description.length < 30
                              ? e.description
                              : e.description.substring(0, 26) + "..."}
                          </p>
                          <p className="fw-bold">Rating: {e.rating}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>{"No Product Found"}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
