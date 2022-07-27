import React from "react";

const Rating = (props) => {
  return (
    <div className="container">
      <div className="row">
        <button
          type="button"
          className="btn btn-dark col-md-4 my-2 mx-2"
          onClick={() => props.filterByRating("5", "6")}
        >
          5
        </button>
        <button
          type="button"
          className="btn btn-dark col-md-4 my-2 mx-2"
          onClick={() => props.filterByRating("4.5", "5")}
        >
          4.5-5
        </button>
        <button
          type="button"
          className="btn btn-dark col-md-4 my-2 mx-2"
          onClick={() => props.filterByRating("4", "4.5")}
        >
          4-4.5
        </button>
        <button
          type="button"
          className="btn btn-dark col-md-4 my-2 mx-2"
          onClick={() => props.filterByRating("3.5", "4")}
        >
          3.5-4
        </button>
        <button
          type="button"
          className="btn btn-dark col-md-4 my-2 mx-2"
          onClick={() => props.filterByRating("3", "3.5")}
        >
          3-3.5
        </button>
        <button
          type="button"
          className="btn btn-dark col-md-4 my-2 mx-2"
          onClick={() => props.filterByRating("2.5", "3")}
        >
          2.5-3
        </button>
        <button
          type="button"
          className="btn btn-dark col-md-4 my-2 mx-2"
          onClick={() => props.filterByRating("2", "2.5")}
        >
          2-2.5
        </button>
        <button
          type="button"
          className="btn btn-dark col-md-4 my-2 mx-2"
          onClick={() => props.filterByRating("1.5", "2")}
        >
          1.5-2
        </button>
        <button
          type="button"
          className="btn btn-dark col-md-4 my-2 mx-2"
          onClick={() => props.filterByRating("1", "1.5")}
        >
          1-1.5
        </button>
        <button
          type="button"
          className="btn btn-dark col-md-4 my-2 mx-2"
          onClick={() => props.filterByRating("0.5", "1")}
        >
          0.5-1
        </button>
        <button
          type="button"
          className="btn btn-dark col-md-4 my-2 mx-2"
          onClick={() => props.filterByRating("0", "0.5")}
        >
          0-0.5
        </button>
        <button
          type="button"
          className="btn btn-dark col-md-4 my-2 mx-2"
          onClick={() => props.filterByRating("All", "none")}
        >
          All
        </button>
      </div>
    </div>
  );
};

export default Rating;
