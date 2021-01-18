import './App.css';
import {useState} from "react"
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import Nominations from "./Components/Nominations";

function App() {
  const [movies, setMovies] = useState([])
  const [nominees, setNominees] = useState([])
  const [query, setQuery] = useState(null)
  const [searchLoading, setSearchLoading] = useState(false)
  const [error, setError] = useState(null)


  const searchHandler = async (query) => {
    setQuery(query)
    setSearchLoading(true)
    const movies = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=fa9015b8`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
          setSearchLoading(false)
          setError(false)
          setMovies(data.Search)
        } else {
          setSearchLoading(false)
          setMovies([])
          setError(data.Error)
        }
      });
  }

  const nominateHandler = (movie) => {
    setNominees([...nominees, movie])
  }

  const removeHandler = (movie) => {
    setNominees(nominees.filter(item => item.imdbID !== movie.imdbID));
  }

  return (
    <div className="App">
      {nominees.length >= 5 && <div className="banner">You have 5 nominations or more!</div>}
      <div className="container">
        <header className="my-5 col-12">
          <h1>
            The Shoppies Awards
          </h1>
        </header>
        <SearchBar search={searchHandler} loading={searchLoading}/>
        <div className="row">
          {(movies.length > 0 || error) && <div className="col-12 col-lg-6 ">
            <SearchResults
              searchResults={movies}
              query={query}
              loading={searchLoading}
              error={error}
              nominees={nominees}
              nominate={nominateHandler}
              removing={removeHandler}
            />
          </div>
          }
          {nominees.length > 0 && <div className="col-12 col-lg-6  pt-5 pt-lg-0">
            <Nominations nominees={nominees} removing={removeHandler}/>
          </div>
          }

        </div>
      </div>

    </div>
  );
}

export default App;
