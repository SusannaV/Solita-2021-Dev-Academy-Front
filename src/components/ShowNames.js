import React from "react";
import Entry from "./Nameentry";
import Table from "react-bootstrap/Table";

const Names = (props) => {
  //filter names by what is entered in the searchbox
  const namesToShow =
    props.search === ""
      ? props.names
      : props.names.filter((peep) =>
          peep.name.toUpperCase().includes(props.search.toUpperCase())
        );

  return (
    <Table striped variant="info">
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {namesToShow.map((dude) => (
          <Entry nameentry={dude} />
        ))}
      </tbody>
    </Table>
  );
};

export default Names;
