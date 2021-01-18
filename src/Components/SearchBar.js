import React from 'react';

const Search = () => {
  return (
    <div className="search-bar-wrapper row p-5 shadow-lg rounded">
    <div className="col-12">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Search for a movie title.</label>
        <div className="search-bar d-flex align-items-center">
          <i className="bi bi-search"/>
          <input type="text" className="form-control"/>
        </div>

      </div>
      <button type="button" className="btn btn-primary" onClick={console.log("CLICK!")}>Search</button>
    </div>
    </div>
  );
};

export default Search;
