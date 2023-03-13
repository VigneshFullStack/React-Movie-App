import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com?apikey=4f770783';

// const movie = {
//   "Title": "Amazing Spiderman Syndrome",
//   "Year": "2012",
//   "imdbID": "tt2586634",
//   "Type": "movie",
//   "Poster": "N/A"
// }

const mystyle = {
  color: "white",
  marginTop: "30px"
};

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies.length > 0 ? (
          <div className='container'>
            {
              movies.map((movie) => (
                <MovieCard movie={movie} />
              ))
            }
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }

      <h4 style={mystyle}>Developed_by_Vicky</h4>
    </div>
  );
}

export default App;
