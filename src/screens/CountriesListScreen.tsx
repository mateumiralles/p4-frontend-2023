import axios from "axios";
import { useEffect, useState } from "react";
import ListTile from "../components/listTile";
import FeedbackMsg from "../components/feedbackMsg";
import TitleSidebar from "../components/titleSidebar";
import SearchBar from "../components/searchBar";

function CountriesListScreen() {
  const [countriesList, setList] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
        "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,languages,area,population,timezones,latlng"
      );
      setList(
        //List setting and sorting alphabetically
        result.data.sort((a: any, b: any) => a["name"]["common"].localeCompare(b["name"]["common"]))
      );
      console.log(result.data);
    };
    fetch();
  }, []);
  return (
    <>
      <div className="flex flex-row h-full w-full  bg-cyan-500">
        <TitleSidebar />
        {countriesList.length < 1 ? (
          <FeedbackMsg msg="loading..." />
        ) : (
          <div className="flex flex-col w-2/3 py-8 items-center bg-cyan-500">
            <SearchBar onQuery={setQuery} />
            {countriesList.filter((n) =>
              n["name"]["common"].toLowerCase().includes(query.toLowerCase())
            ).length > 0 ? (
              countriesList
                .filter((n) =>
                  n["name"]["common"]
                    .toLowerCase()
                    .includes(query.toLowerCase())
                )
                .map((country) => {
                  return <ListTile c={country} />;
                })
            ) : (
              <FeedbackMsg msg="Results not found, check your query!" />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default CountriesListScreen;
