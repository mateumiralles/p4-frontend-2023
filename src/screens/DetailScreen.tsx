import { Link } from "react-router-dom";

function DetailScreen() {
  return (
    <>
      <h1>Detail Screen</h1>
      <Link to="/">
        {" "}
        <h2>GO BACK TO THE LIST</h2>
      </Link>
    </>
  );
}

export default DetailScreen;
