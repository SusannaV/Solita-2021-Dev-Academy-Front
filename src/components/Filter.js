import React from "react";
import Form from "react-bootstrap/Form";

const Filter = (props) => {
  return (
    <Form>
      <Form.Label>Filter shown with:</Form.Label>
      <Form.Control
        type="search"
        placeholder="Try searching for a name"
        value={props.newSearch}
        onChange={props.handleSearch}
      />
    </Form>
  );
};

export default Filter;
