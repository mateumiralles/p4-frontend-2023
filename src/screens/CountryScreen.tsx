import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function CountryScreen() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const c = location.state.item;
  const cName: string = c["name"]["common"];
  const cReg: string = c["region"];
  const cSubReg: string = c["subregion"];
  const cCap: string = c["capital"][0]===undefined ? 'Does not have capital city!' :  c["capital"][0];
  const cCapLatLong: string = `(${c["latlng"][0].toFixed(2)}, ${c[
    "latlng"
  ][1].toFixed(2)})`;
  const cArea: string = c["area"];
  const cPopu: string = c["population"];
  const cTimes: string[] = c["timezones"];
  const langs: string[] = Object.values(c["languages"]);

  return (
    <>
      <div className="h-max w-full flex flex-col bg-cyan-500">
        <Link
          to="/"
          className="w-32 mt-7 ml-9 rounded-lg bg-cyan-600 hover:bg-cyan-700 z-10"
        >
          <h2 className="font-bold text-white text-center m-2">GO BACK</h2>
        </Link>
        <div className="flex flex-row ">
          <div className="flex flex-col w-1/2 mb-16">
            <h1 className="text-9xl font-bold text-white ml-9">
              {cName.toUpperCase()}
            </h1>
            <h3 className="text-3xl font-bold text-white ml-9">
              {cReg.toUpperCase()}, {cSubReg.toUpperCase()}
            </h3>
            <h3 className="ml-9 text-white text-2xl font-bold">
              <span className="font-normal">CAPITAL: </span>
              {`${cCap.toUpperCase()} ${cCapLatLong}`}
            </h3>
          </div>
          <div className="flex flex-col w-1/2  items-center">
            <img
              className="h-auto w-fit mx-44 border"
              src={c["flags"]["svg"]}
              alt={c["flags"]["alt"]}
            />
          </div>
        </div>
        <div className=" mt-10 flex flex-row justify-evenly bg-cyan-600  ">
          <div className="flex flex-col items-center justify-evenly  h-40 text-4xl font-bold text-white">
            <h2>AREA:</h2>
            <p>{`${cArea} km²`}</p>
          </div>
          <div className="flex flex-col items-center justify-evenly h-40 text-4xl font-bold text-white">
            <h2>POPULATION:</h2>
            <p>{`${cPopu} inhabitants `}</p>
          </div>
        </div>

        <div className=" flex flex-col items-center bg-cyan-700 justify-evenly h-max py-10  text-4xl font-bold text-white">
          <h2 className="pb-5">LANGUAGES:</h2>
          {langs.map((l: string) => {
            return <p>{l}</p>;
          })}
        </div>

        <div className="flex flex-col items-center bg-cyan-600  justify-evenly  h-max py-10 text-4xl font-bold text-white">
          <h2 className="pb-5">TIMEZONES:</h2>
          {cTimes.map((timezone: string) => {
            return <p>{timezone}</p>;
          })}
        </div>
      </div>
    </>
  );
}

export default CountryScreen;
