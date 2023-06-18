//import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [wantedList, setWanted] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const result = await axios("https://api.fbi.gov/wanted/v1/list");
      setWanted(result.data.items);
    };
    fetch();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>FBI MOST WANTED</h1>
              <ol>
                {wantedList.map((w) => (
                  <li>
                    <div>
                      {" "}
                      <h5>{w["title"]}</h5>{" "}
                      <img src={w["images"][0]["thumb"]} />
                      <p>{w["description"]}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </>
          }
        />
        <Route path="/detail" element={<h1>Detail Screen</h1>}/>
        <Route path="/*" element={<h1>The page you are looking for is not avaliable!</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
