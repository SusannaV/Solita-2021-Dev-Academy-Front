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

  //Activate search when value is entered to searchbox
  const handleSearch = (event) => {
    setNewSearch(event.target.value);
  };

  //Get the initial list of names
  useEffect(() => {
    nameService.getAll().then((names) => {
      setNames(names);
    });
  }, []);

  //Sort names by criteria selected in the dropdown menu
  useEffect(() => {
    const sortArray = (type) => {
      var sorted;
      if (type === "name") {
        sorted = [...names].sort((a, b) => a.name.localeCompare(b.name));
      } else if (type === "amount") {
        sorted = [...names].sort((a, b) => b.amount - a.amount);
      }
      setOrder(sorted);
    };

    sortArray(sorter);
  }, [names, sorter]);

  return (
    <div className="container">
      <h1 class="display-1">Name Application</h1>
      <p class="lead">
        This list contains the top-10 of both male and female names in Solita.
        <br />
        The total amount of people included in the list is <b>{totalPeople}</b>.
      </p>
      <p>
        Want to find someone in particular? Try typing their name in the
        searchbox below.
      </p>
      <Filter newSearch={newSearch} handleSearch={handleSearch} />

      <h2>List of names</h2>
      <Dropdown classname="ddmenu">
        <Dropdown.Toggle
          variant="info"
          id="order-dropdown"
          vertical-align="middle"
        >
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
      <footer class="bg-light text-center">
        <div class="text-center p-3">
          © 2021 Copyright:
          <a href="https://github.com/SusannaV/">Susanna Veijalainen</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
