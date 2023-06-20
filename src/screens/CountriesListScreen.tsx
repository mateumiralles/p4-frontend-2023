import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CountriesListScreen() {
  const [countriesList, setList] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      //Potser implementar mes endavant translations i maps
      const result = await axios(
        "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,languages,area,population,timezones,latlng"
      );
      setList(result.data);
      console.log(result.data);
    };
    fetch();
  }, []);
  return (
    <>
      <h1>COUNTRIES LIST</h1>
      <ol>
        {countriesList.map((c) => (
          <li>
            <div>
              <Link state={{ item: c }} to={c["name"]["common"]}>
                <h5>{c["name"]["common"]}</h5>
              </Link>
              <h5>{c["name"]["common"]}</h5>
              <img
                height="45"
                src={c["flags"]["svg"]}
                alt={c["flags"]["alt"]}
              />
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

export default CountriesListScreen;
