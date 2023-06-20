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
      <div className="columns-2">
        {countriesList.map((c) => {
          return (
            <Link state={{ item: c }} to={c["name"]["common"]}>
              <div
                className="grid justify-items-center border  border-black rounded mb-8"
                key={c["name"]["common"]}
              >
                <div className="basis-1/2" >
                  <p className="text-2xl font-bold">{c["name"]["common"]}</p>
                </div>
                <div className="basis-1/2">
                  <img
                    className="h-10 m-3"
                    src={c["flags"]["svg"]}
                    alt={c["flags"]["alt"]}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default CountriesListScreen;
