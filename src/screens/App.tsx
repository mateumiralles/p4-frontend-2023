//import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CountriesListScreen from "./CountriesListScreen";
import CountryScreen from "./CountryScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountriesListScreen />} />
        <Route path="/:countryName" element={<CountryScreen />} />
        <Route
          path="/*"
          element={<h1>The page you are looking for is not avaliable!</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
