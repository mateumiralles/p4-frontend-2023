import { Link, useLocation } from "react-router-dom";

function DetailScreen() {
  const location = useLocation();

  const w = location.state.item;
  return (
    <>
      <Link to="/">
        <h2>GO BACK TO THE LIST</h2> 
      </Link>
      <h1>Detail Screen of {w["title"]}</h1>
      <img src={w["images"][0]["large"]} />
      <p>{w['description']}</p>
    </>
  );
}

export default DetailScreen;
