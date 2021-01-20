import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import ShowNames from "./components/ShowNames";
import nameService from "./services/names";

const App = () => {
  const [names, setNames] = useState([]);
  const [order, setOrder] = useState([]);
  const [sorter, setSorter] = useState("amount");
  const [newSearch, setNewSearch] = useState("");

  const totalPeople = names.reduce((s, t) => s + t.amount, 0);

  const handleSearch = (event) => {
    setNewSearch(event.target.value);
  };

  useEffect(() => {
    console.log("Here you go!");
    nameService.getAll().then((names) => {
      setNames(names);
    });
  }, []);

  useEffect(() => {
    const sortArray = (type) => {
      var sorted;
      if (type === "name") {
        sorted = [...names].sort((a, b) => a.name.localeCompare(b.name));
      } else if (type === "amount") {
        sorted = [...names].sort((a, b) => b.amount - a.amount);
      }
      console.log(sorted);
      setOrder(sorted);
    };

    sortArray(sorter);
  }, [names, sorter]);

  return (
    <div>
      <h2>Name Application</h2>
      <h4>Total amount of people included in the list: {totalPeople} </h4>
      <p>
        Want to find someone in particular? Try typing their name in the
        searchbox below.
      </p>
      <Filter newSearch={newSearch} handleSearch={handleSearch} />
      <h2>List of names</h2>

      <p>
        Order by:
        <select onChange={(e) => setSorter(e.target.value)}>
          <option value="amount" label="Most popular" />
          <option value="name" label="Alphabetical order" />
        </select>
      </p>

      <ShowNames search={newSearch} names={order} />
    </div>
  );
};

export default App;

//jatka 2.c npm
