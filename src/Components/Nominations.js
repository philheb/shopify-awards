import React, {useState, useEffect} from 'react';
import Movie from "./Movie";

const Nominations = ({nominees, removing}) => {

  return (
    <div className="nomination-wrapper row shadow-lg rounded p-3">
      <div className="col-12 nomination ">
        <header className="nomination-header mb-4 d-flex align-items-center">
          <i className="bi bi-trophy pr-2"/>
          <h4 className="m-0">Nominations</h4>
        </header>
        <main>
          {nominees.length > 0 && nominees.map((movie) => (
            <Movie key={movie.imdbID} data={movie} nominees={nominees} removing={removing}/>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Nominations;
