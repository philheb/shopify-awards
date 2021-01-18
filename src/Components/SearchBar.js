import React, {useState} from 'react';

const SearchBar = (props) => {
  const [query, setQuery] = useState("")
  const buttonContent = props.loading ? (<div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>) : "Search"

  const submitHandler = (e) => {
    e.preventDefault()
    props.search(query)
  }

  return (
    <div className="col-12">
      <div className="search-bar-wrapper row p-3 mb-5 shadow-lg rounded">
        <div className="col-12">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label>Search for a movie title.</label>
              <div className="search-bar d-flex align-items-center">
                <i className="bi bi-search"/>
                <input type="text" className="form-control" onChange={(e) => setQuery(e.target.value)}/>
              </div>
            </div>
            <button className="btn btn-primary">{buttonContent}</button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default SearchBar;
