import React from "react";
import Entry from "./Nameentry";

const Names = (props) => {
  const namesToShow =
    props.search === ""
      ? props.names
      : props.names.filter((peep) =>
          peep.name.toUpperCase().includes(props.search.toUpperCase())
        );

  return (
    <div>
      {namesToShow.map((dude) => (
        <Entry key={dude.name} nameentry={dude} />
      ))}
    </div>
  );
};

export default Names;
