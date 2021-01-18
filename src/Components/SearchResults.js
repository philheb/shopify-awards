import React, {useState, useEffect} from 'react';
import Movie from "./Movie";

const SearchResults = ({searchResults, query, error, nominees, nominate, removing}) => {
  return (
    <div className="search-result-wrapper row shadow-lg rounded p-3">
      <div className="col-12 search-result ">
        <header className="search-result-header mb-4 d-flex align-items-center">
          <i className="bi bi-search pr-2"/>
          <h4 className="m-0"> Results for "{query}" </h4>
        </header>
        <main>
          {error && <div><p>{error}</p></div>}
          {searchResults.length > 0 && searchResults.map((movie) => (
            <Movie key={movie.imdbID} data={movie} nominees={nominees} nominate={nominate} removing={removing}/>
          ))}
        </main>
      </div>

    </div>
  );
};

export default SearchResults;
