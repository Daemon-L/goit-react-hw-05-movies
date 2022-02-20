import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Searchbar () {

  const [searchField, setSearchField] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  
  const handleSearch = (evt) => {
    setSearchField(evt.currentTarget.value.toLowerCase() );   
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    if (searchField.trim() === "") {
      alert("Enter request");
      return;
    }
    setSearchParams({ query: evt.currentTarget.elements.query.value });
    setSearchField("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          value={searchField}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
    </>
    );
}
export default Searchbar;