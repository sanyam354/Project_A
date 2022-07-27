import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import productContext from "../context/product-context";
//
import { differentCategory } from "./function";
//
const HomePage = () => {
  let { products, cart } = useContext(productContext);
  const [currentProducts, setCurrentProducts] = useState([products]);
  const [currentCart, setCurrentCart] = useState(cart);

  const getProducts = async () => {
    const { data } = await axios.get(
      "https://dummyjson.com/products?limit=100"
    );
    setCurrentProducts(data.products);
    products.push(data);
    if (products.length > 1) {
      products.splice(1, products.length);
    }
  };

  //
  const addToCart = (id, item) => {
    let array = [];
    if (cart.length !== 0) {
      cart.map((e) => {
        if (e.id === id) {
          array.push(id);
          return;
        }
      });
    }

    if (array.length === 0) {
      cart.push(item);
      setCurrentCart(cart);
    } else {
      window.alert("Already in cart");
      array = [];
    }
  };

  //
  const category = differentCategory(currentProducts);

  //
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-end ">
          <Link className="sectionWise" to="/section">
            <button type="button" className="btn btn-primary">
              Category Wise Products
            </button>
          </Link>
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mx-2 my-3 container">
              <div className="row">
                <h3 className="text-center col-md-12">Category</h3>

                {category &&
                  category.map((e, key) => (
                    <div
                      className="d-grid gap-2 my-1 col-md-6"
                      key={`index:${key}`}
                    >
                      <Link to={`/category/${e.category}`}>
                        <button type="button" className="btn btn-primary">
                          {e.category}
                        </button>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>

            {currentProducts &&
              currentProducts.map((item) => (
                <div
                  className="card col-md-3 mx-3 my-3"
                  style={{ width: "18rem" }}
                  key={`${item.id}`}
                >
                  <img
                    src={`${item.thumbnail}`}
                    className="card-img-top categoryImage"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.brand}</h5>
                    <h5 className="card-title">
                      Stock:
                      {item.stock > 50
                        ? item.stock
                        : "hurry! only a few items left"}
                    </h5>
                    <h5 className="card-title">{item.brand}</h5>

                    <p className="card-text">{item.description}</p>
                    <button
                      onClick={() => addToCart(item.id, item)}
                      className="btn btn-primary"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
