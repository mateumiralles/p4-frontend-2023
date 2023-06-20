import { Link, useLocation } from "react-router-dom";

function CountryScreen() {
  const location = useLocation();

  const c = location.state.item;

 
  return (
    <>
      <Link to="/">
        <h2>GO BACK TO THE LIST</h2>
      </Link>
      <h1>Detail Screen of {c["name"]["common"]}</h1>
      <img height="100" src={c["flags"]["svg"]} alt={c["flags"]["alt"]} />
     </>
  );
}

export default CountryScreen;
