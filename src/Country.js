import React from "react";

const Country = ({
  name,
  capital,
  flags,
  region,
  subregion,
  languages,
  borders,
}) => {
  return (
    <article>
      <img src={flags[0]} alt={name.common}></img>
      <h1>{name.commmon}</h1>
    </article>
  );
};

export default Country;
