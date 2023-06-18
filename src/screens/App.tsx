//import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListScreen from "./ListScreen";
import DetailScreen from "./DetailScreen";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ListScreen/>
          }
        />
        <Route path="/:id" element={<DetailScreen/>}/>
        <Route path="/*" element={<h1>The page you are looking for is not avaliable!</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
