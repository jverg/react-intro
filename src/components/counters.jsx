import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      stars,
      onDelete,
      onIncrement,
      onStarUpdate
    } = this.props;

    return (
      <div className="col-md-12">
        <hr />
        <button className="btn btn-primary btn-sm.m-2" onClick={onReset}>
          Αφαίρεση όλων
        </button>
        <hr />
        <div className="container">
          <div className="row">
            {counters.map((counter) => (
              <Counter
                key={counter.id}
                stars={stars}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onStarUpdate={onStarUpdate}
                counters={counters}
                counter={counter}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Counters;
