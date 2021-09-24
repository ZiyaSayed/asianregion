import React from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  return (
    <section className="countries">
      {countries.map((country, index) => {
        return <Country key={index} {...country}></Country>;
      })}
    </section>
  );
};

export default Countries;
