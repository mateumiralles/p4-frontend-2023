const SearchBar = ({ onQuery }: any) => {
  function handleInput(e: any) {
    onQuery(e.target.value);
  }
  return (
    <>
      <input
        className="w-1/2 h-16 my-5 rounded-xl p-6 text-center text-2xl font-bold outline-none bg-cyan-400 placeholder-white placeholder-opacity-80"
        placeholder="Type here to search for a country!"
        onInput={handleInput}
      >
        {}
      </input>
    </>
  );
};

export default SearchBar;
