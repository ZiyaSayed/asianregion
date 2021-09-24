import React, { useState, useEffect } from "react";

const Country = ({
  name,
  capital,
  flags,
  region,
  subregion,
  languages,
  borders,
}) => {
  const [border, setBorder] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    if (borders) {
      setBorder(borders.join(","));
    } else {
      setBorder("loading...");
    }
  }, [border]);

  useEffect(() => {
    if (languages) {
      setLanguage(Object.values(languages).join(","));
    } else {
      setLanguage("loading...");
    }
  }, [languages]);

  return (
    <div className="country">
      <div className="countryInfo">
        <h1>{name.common}</h1>
        <p>{capital[0]}</p>
        <p>{region}</p>
        <p>{subregion}</p>
        <p>{border}</p>
        <p>{language}</p>
      </div>

      <div className="countryImage">
        <img src={flags[0]} alt={name.common} />
      </div>
    </div>
  );
};

export default Country;
