import React from 'react';

const Movie = ({data, nominees, nominate, removing}) => {
  return (
    <div className="movie row mb-3">
      <div className="col-6 p-0 movie-left">
        <img src={data.Poster} className="search-result-image" alt=""/>
      </div>
      <div className="col-6 p-0 movie-right d-flex flex-column justify-content-center">
        <p>{data.Title} ({data.Year})</p>
        {(nominees.findIndex(item => item.imdbID === data.imdbID) !== -1) ?
          <button className="btn btn-danger" onClick={() => removing(data)}>Remove</button> :
          <button className="btn btn-success" onClick={() => nominate(data)}>Nominate</button>
        }
      </div>
    </div>

  );
};

export default Movie;
