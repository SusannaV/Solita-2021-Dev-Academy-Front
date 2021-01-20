import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import ShowNames from "./components/ShowNames";
import nameService from "./services/names";
import Dropdown from "react-bootstrap/Dropdown";

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
    <div className="container">
      <h1>Name Application</h1>
      <h4>Total amount of people included in the list: {totalPeople} </h4>
      <p>
        Want to find someone in particular? Try typing their name in the
        searchbox below.
      </p>
      <Filter newSearch={newSearch} handleSearch={handleSearch} />
      <h2>List of names</h2>

      <Dropdown>
        <Dropdown.Toggle variant="info" id="order-dropdown">
          Order list
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onSelect={(e) => setSorter("amount")}>
            Most popular first
          </Dropdown.Item>
          <Dropdown.Item onSelect={(e) => setSorter("name")}>
            Alphabetically
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <ShowNames search={newSearch} names={order} />
    </div>
  );
};

export default App;
