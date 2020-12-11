import React from "react";
import Counter from "./counter";

function Counters(props) {
  return (
    <div className="col-md-12">
      <hr />
      <button className="btn btn-primary btn-sm.m-2" onClick={props.onReset}>
        Αφαίρεση όλων
      </button>
      <hr />
      <div className="container">
        <div className="row">
          {props.counters.map((counter) => (
            <Counter
              key={counter.id}
              stars={props.stars}
              onDelete={props.onDelete}
              onIncrement={props.onIncrement}
              onStarUpdate={props.onStarUpdate}
              counters={props.counters}
              counter={counter}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Counters;
