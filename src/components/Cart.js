import React from "react";
import { useContext, useState } from "react";

import { Link } from "react-router-dom";

import productContext from "../context/product-context";
const Cart = () => {
  const { cart } = useContext(productContext);
  const [currentCartNew, setCurrentCartNew] = useState(cart);

  const removeFromCart = (id) => {
    const data = currentCartNew.filter((e) => e.id !== id);
    setCurrentCartNew(data);

    const newId = cart.indexOf(id);
    cart.splice(newId, 1);
  };

  return (
    <div>
      <div>
        <Link to="/">
          <button type="button" className="btn btn-primary">
            Go Back
          </button>
        </Link>
        <div>
          <div className="container">
            <div className="row">
              {currentCartNew &&
                currentCartNew.map((item) => (
                  <div
                    className="card col-md-4 mx-3 my-3"
                    style={{ width: "18rem" }}
                    key={`SNo :${item.id}`}
                  >
                    <img
                      src={`${item.thumbnail}`}
                      className="card-img-top"
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
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-primary"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
