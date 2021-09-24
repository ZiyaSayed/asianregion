import React, { useState, useEffect } from "react";
import Countries from "./Countries";
// https://restcountries.com/v3/region/{region}

// const url =
//   "https://api.countrylayer.com/v2/region/Asia?access_key=0ee2dc82da87fa8c45d83ea3a78502d4";

const url = "https://restcountries.com/v3/region/Asia";

function App() {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);
  // const [value, setValue] = useState(0);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const newCountry = await response.json();
      setCountry(newCountry);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  if (loading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  console.log(country);
  // const {name, capital, flag, region, subregion, languages, borders}=country[value];

  return (
    <main>
      <button onClick={fetchCountries}>Refresh</button>
      <Countries countries={country} />
    </main>
  );
}

export default App;
