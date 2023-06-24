const SearchBar = ({ onQuery }: any) => {
  function handleInput(e: any) {
    onQuery(e.target.value);
  }
  return (
    <>
      <input
        className="w-1/3 h-9 rounded-xl p-3 text-center text-xl"
        placeholder="Type here to search!"
        onInput={handleInput}
      >
        {}
      </input>
    </>
  );
};

export default SearchBar;
