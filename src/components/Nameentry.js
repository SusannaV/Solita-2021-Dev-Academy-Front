import React from "react";

const Entry = ({ nameentry }) => {
  return (
    <tr key={nameentry.name}>
      <td>{nameentry.name}</td>
      <td> {nameentry.amount}</td>
    </tr>
  );
};

export default Entry;
