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
  const [border, setBorder] = useState([]);
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    if (borders) {
      setBorder(borders);
    } else {
      setBorder(["Loading..."]);
    }
  }, [border]);

  useEffect(() => {
    if (languages) {
      setLanguage(Object.values(languages));
    } else {
      setLanguage(["loading..."]);
    }
  }, [language]);

  return (
    <div className="country">
      <div className="countryInfo">
        <h1>{name.common}</h1>
        <h3>Capital</h3>
        <p>{capital[0]}</p>
        <h3>Region</h3>
        <p>{region}</p>
        <h3>Subregion</h3>
        <p>{subregion}</p>
        <h3>Borders</h3>
        <p className="border">
          {border.map((b, index) => {
            return <li key={index}>{b}</li>;
          })}
        </p>
        <h3>Languages</h3>
        <p className="language">
          {language.map((l, index) => {
            return <li key={index}>{l}</li>;
          })}
        </p>
      </div>

      <div className="countryImage">
        <img src={flags[0]} alt={name.common} />
      </div>
    </div>
  );
};

export default Country;
