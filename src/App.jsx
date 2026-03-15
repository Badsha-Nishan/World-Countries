import { Suspense } from "react";
import "./App.css";
import Countries from "./Countries/Countries";

const allCountriesFetch = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
};
function App() {
  const allCountries = allCountriesFetch();
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Countries allCountries={allCountries}></Countries>
      </Suspense>
    </>
  );
}

export default App;
