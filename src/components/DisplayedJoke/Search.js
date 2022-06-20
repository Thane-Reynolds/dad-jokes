import * as React from "react";

export default function Search({ curatedTerm, setCuratedTerm }) {
  const [searchTerm, setSearchTerm] = React.useState(curatedTerm);

  function handleUpdate(e) {
    setSearchTerm(e.currentTarget.value);
  }

  function handlesubmit(e) {
    e.preventDefault();
    setCuratedTerm(searchTerm);
  }

  React.useEffect(() => {
    setSearchTerm(curatedTerm);
  }, [curatedTerm]);

  return (
    <div className="flex flex-row justify-center w-full">
      <form className="w-2/3 flex flex-row" onSubmit={(e) => handlesubmit(e)}>
        <label className="sr-only" htmlFor="searchTerm">
          Search Term
        </label>
        <input
          type="text"
          id="searchTerm"
          name="searchTerm"
          className="grow border-indigo-500 border-2 mr-4 p-2"
          placeholder="Enter the term you want to search for"
          onChange={(e) => handleUpdate(e)}
          value={searchTerm}
        />
        <button
          type="submit"
          className="bg-indigo-500 uppercase text-white font-bold px-4 py-1"
        >
          Search
        </button>
      </form>
    </div>
  );
}
