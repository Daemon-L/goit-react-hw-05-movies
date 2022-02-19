import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';
// import {Wrapper, SearchForm, SearchFormBtn, SearchInput } from './Searchbar.styled';

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
                <button type="submit">Search</button>
                <input
                    type="text"
                    autoComplete="off"
                    name="query"
                    autoFocus
                    placeholder="Search movies"
                    value={searchField}
                    onChange={handleSearch}
                />
            </form>
        </>
    );
}
export default Searchbar;

Searchbar.propTypes = {
      onSubmit: PropTypes.func.isRequired,
};