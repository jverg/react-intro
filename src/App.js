import React, { useState } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

function App() {
  const [totalCounter, setTotalCounter] = useState(0);
  const [stars, setStars] = useState([1, 2, 3, 4, 5]);
  const [counters, setCounters] = useState([
    { id: 1, name: "Λαμπάκια", stars: 0, value: 0 },
    { id: 2, name: "Χριστουγεννιάτικο δέντρο", stars: 0, value: 0 },
    { id: 3, name: "Φάτνη", stars: 0, value: 0 },
    { id: 4, name: "Σοκολατάκια", stars: 0, value: 0 },
    { id: 5, name: "Άγιος Βασίλης", stars: 0, value: 0 },
    { id: 6, name: "Μελομακάρονα", stars: 0, value: 0 },
    { id: 7, name: "Κουραμπιέδες", stars: 0, value: 0 }
  ]);

  const handleDelete = (counter) => {
    const index = counters.indexOf(counter);
    setTotalCounter(totalCounter - counters[index].value);
    counters[index].value = 0;
    setCounters(counters);
  };

  const handleIncrement = (counter) => {
    const index = counters.indexOf(counter);
    counters[index].value++;
    setTotalCounter(totalCounter + 1);
    setCounters(counters);
  };

  const starUpdate = (counter, star) => {
    const index = counters.indexOf(counter);
    counters[index].stars = 0 + star;
    setCounters(counters);
    setStars([1, 2, 3, 4, 5]);
  };

  const handleReset = () => {
    setTotalCounter(0);
    const countersIn = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(countersIn);
  };

  return (
    <React.Fragment>
      <NavBar totalCounter={totalCounter} />
      <main className="container">
        <Counters
          counters={counters}
          stars={stars}
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onStarUpdate={starUpdate}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
