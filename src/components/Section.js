import React from "react";

const Section = ({ product }) => {
  return (
    <>
      <div className="container">
        <h1>{product[0].category}</h1>
        <div className="row">
          {product.map((e, key) => (
            <div className="col-md-4 my-2" key={`NewNumber${key}`}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={`${e.thumbnail}`}
                  className="card-img-top categoryImage"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section;
