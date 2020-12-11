import React from "react";
import Stars from "./stars";
import "../styles/style.css";

function Counter(props) {
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += props.counter === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    const { value } = props.counter;
    return value === 0 ? "" : value;
  };

  return (
    <div className="col-md-4 cardstyle">
      <div className="card-item">
        <h5 className="title">
          {props.counter.name}
          <span className={getBadgeClasses()}>{formatCount()}</span>
        </h5>
        {props.stars.map((star, index) => (
          <Stars
            key={index}
            star={star}
            onStarUpdate={props.onStarUpdate}
            counter={props.counter}
          />
        ))}
        <div className="buttons">
          <button
            onClick={() => props.onIncrement(props.counter)}
            className="btn btn-secondary btn-sm"
          >
            <svg
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 16 16"
              className="bi bi-basket2-fill"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1z"
              />
            </svg>
          </button>
          <button
            onClick={() => props.onDelete(props.counter)}
            className="btn btn-danger btn-sm m-2"
          >
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              className="bi bi-trash"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
