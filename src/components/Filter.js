import React from "react";
import Form from "react-bootstrap/Form";

const Filter = (props) => {
  return (
    <Form classname="searchform">
      <Form.Control
        type="search"
        placeholder="Search for..."
        value={props.newSearch}
        onChange={props.handleSearch}
      />
    </Form>
  );
};

export default Filter;
