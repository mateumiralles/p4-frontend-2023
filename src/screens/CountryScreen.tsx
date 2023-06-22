import { Link, useLocation } from "react-router-dom";

function CountryScreen() {
  const location = useLocation();

  const c = location.state.item;

  return (
    <>
      <Link to="/">
        <h2>GO BACK TO THE LIST</h2>
      </Link>
      <div className="h-max w-screen flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col w-1/4 bg-green-300">
            <h1>{c["name"]["common"]}</h1>
            <h3>
              {c["region"]}, {c["subregion"]}
            </h3>
            <h3>
              {c["capital"]}, LAT:{c["latlng"][0]} LANG:{c["latlng"][1]}
            </h3>
          </div>
          <div className="flex flex-col w-3/4 bg-yellow-300">
            <img
              className="h-48"
              src={c["flags"]["svg"]}
              alt={c["flags"]["alt"]}
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-purple-500">
          <h2>AREA:</h2>
          <p>{c["area"]}</p>
        </div>
        <div className="flex flex-col items-center bg-cyan-500">
          <h2>POPULATION:</h2>
          <p>{c["population"]}</p>
        </div>
        <div className="flex flex-col items-center bg-stone-400">
          <h2>LANGUAGE:</h2>
          {Object.values(c["languages"])}
        </div>
        <div className="flex flex-col items-center bg-red-300">
          <h2>TIMEZONES:</h2>
          {c["timezones"].map((timezone: string) => {
            return <p>{timezone}</p>;
          })}
          
        </div>
        
      </div>
    </>
  );
}

export default CountryScreen;
