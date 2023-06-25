import { Link } from "react-router-dom";

const ListTile = (props: any) => {
  return (
    <>
      <Link className="my-2 flex min-h-min w-full justify-center" state={{ item: props.c }} to={ props.c["name"]["common"]}>
        <div
          className="flex h-16  w-2/3  items-center justify-center bg-cyan-600 rounded-lg shadow-cyan-700 shadow-md"
          key={ props.c["name"]["common"]}
        >
            <img
              className="h-6 mr-3 border border-black"
              src={ props.c["flags"]["svg"]}
              alt={ props.c["flags"]["alt"]}
            />
          <div>
            <p className="text-2xl text-white font-bold pb-2">{ props.c["name"]["common"]}</p>
          </div>
          <div>
            <img
              className="h-6 ml-3 border border-black"
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
