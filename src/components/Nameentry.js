import React from "react";

const Entry = ({ nameentry }) => {
  return (
    <li key={nameentry.name}>
      {nameentry.name} {nameentry.amount}
    </li>
  );
};

export default Entry;
