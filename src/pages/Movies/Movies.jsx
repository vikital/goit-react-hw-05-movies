import { useState, useEffect } from 'react';
import { fetchSearchMovies } from 'apiMovies/fetchMovies';
import { useSearchParams, useLocation } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
export const Movies = () => {
  const [searchForm, setSearchFrom] = useState('');
  const [searchMoviesArry, setSearchMoviesArry] = useState([]);
  const [searchParams, setSearchForm] = useSearchParams();
  const location = useLocation();

  const handSetState = e => {
    setSearchFrom(e.target.value);
  };
  const searchMovies = async moviesName => {
    const response = await fetchSearchMovies(moviesName);
    return response;
  };

  const submitSearch = e => {
    e.preventDefault();
    searchForm.trim()
      ? setSearchForm({ query: searchForm })
      : setSearchForm({});
  };
  useEffect(() => {
    let searchQuery = searchForm;
    console.log('useEffect start');
    if (location.search && !searchForm) {
      let arryLocation = location.search.split('');
      searchQuery = arryLocation.splice(arryLocation.indexOf('=') + 1).join('');
      setSearchFrom(searchQuery);
    }
    searchMovies(searchQuery).then(response => {
      setSearchMoviesArry(response.data.results);
    });

    // eslint-disable-next-line
  }, [searchParams]);

  return (
    <>
      <form onSubmit={submitSearch}>
        <input onChange={handSetState} value={searchForm} type="text" />
        <button type="submit">Search</button>
      </form>
      <MoviesList MoviesArry={searchMoviesArry}></MoviesList>
    </>
  );
};
