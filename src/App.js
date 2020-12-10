import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    totalCounter: 0,
    counters: [
      { id: 1, name: "Λαμπάκια", value: 0 },
      { id: 2, name: "Χριστουγεννιάτικο δέντρο", value: 0 },
      { id: 3, name: "Φάτνη", value: 0 },
      { id: 4, name: "Σοκολατάκια", value: 0 },
      { id: 5, name: "Άγιος Βασίλης", value: 0 },
      { id: 6, name: "Μελομακάρονα", value: 0 },
      { id: 7, name: "Κουραμπιέδες", value: 0 }
    ]
  };

  handleDelete = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    const totalCounter = this.state.totalCounter - counters[index].value;
    counters[index].value = 0;
    this.setState({ counters, totalCounter });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    const totalCounter = this.state.totalCounter + 1;
    this.setState({ counters, totalCounter });
  };

  handleReset = () => {
    const totalCounter = 0;
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters, totalCounter });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounter={this.state.totalCounter} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
