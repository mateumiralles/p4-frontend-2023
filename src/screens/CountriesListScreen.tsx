import axios from "axios";
import { useEffect, useState } from "react";
import ListTile from "../components/listTile";
import LoadingMsg from "../components/loadingMsg";
import TitleSidebar from "../components/titleSidebar";
import SearchBar from "../components/searchBar";

function CountriesListScreen() {
  const [countriesList, setList] = useState<any[]>([]);
  const [query, setQuery] = useState("");
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
      <div className="flex flex-row h-full w-full  bg-cyan-500">
        <TitleSidebar />
        {countriesList.length < 1 ? (
          <LoadingMsg />
        ) : (
          <div className="flex flex-col w-full py-8 items-center bg-cyan-500">
            <SearchBar onQuery={setQuery} />

            {countriesList
              .filter((n) =>
                n["name"]["common"].toLowerCase().includes(query.toLowerCase())
              )
              .map((country) => {
                return <ListTile c={country} />;
              })}
          </div>
        )}
      </div>
    </>
  );
}

export default CountriesListScreen;
