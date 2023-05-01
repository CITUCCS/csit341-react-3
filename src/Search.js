import { React } from "react";

const Search = (props) => {
  let {searchTerm, onSearchTermChange} = props;

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={onSearchTermChange} value={searchTerm}/>
      {searchTerm && searchTerm.trim() !== "" && (
        <p>
          Searching for : <strong>{searchTerm}</strong>
        </p>
      )}
    </div>
  );
};

export default Search;
