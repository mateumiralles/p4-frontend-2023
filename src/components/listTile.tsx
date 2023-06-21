import { Link } from "react-router-dom";

function ListTile(props: any) {
  return (
    <>
      <Link className="w-2/3" state={{ item: props.c }} to={ props.c["name"]["common"]}>
        <div
          className="flex my-2 w-full mx-10 items-center bg-cyan-600 rounded-lg shadow-cyan-700 shadow-md"
          key={ props.c["name"]["common"]}
        >
          <div>
            <p className="text-2xl font-bold pb-2">{ props.c["name"]["common"]}</p>
          </div>
          <div>
            <img
              className="h-5 m-3"
              src={ props.c["flags"]["svg"]}
              alt={ props.c["flags"]["alt"]}
            />
          </div>
        </div>
      </Link>
    </>
  );
}

export default ListTile;
