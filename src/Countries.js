import React from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((country, index) => {
        return <Country key={index} {...country}></Country>;
      })}
    </div>
  );
};

export default Countries;
