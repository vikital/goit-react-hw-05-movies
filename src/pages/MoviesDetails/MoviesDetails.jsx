import { useParams, NavLink, Link, useLocation } from 'react-router-dom';
import { fetchAbautMovies } from 'apiMovies/fetchMovies';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const MoviesDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const backPath = location.state?.from || '/';
  const [moviesDetails, setMoviesDetails] = useState([]);
  const abautMovies = async id => {
    const response = await fetchAbautMovies(id);
    return response;
  };
  useEffect(() => {
    abautMovies(id).then(response => {
      setMoviesDetails(response.data);
    });
  }, [id]);
  try {
    const { overview, release_date, poster_path, title, genres, vote_average } =
      moviesDetails;
    let yearMovies = release_date.slice(0, 4);

    return (
      <>
        <Link to={backPath}>Go back</Link>
        <div>
          <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
          <div>
            <h1>
              {title}({yearMovies})
            </h1>
            <p>User Sroce:{Math.round(vote_average)}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            {genres.map(e => (
              <li key={e.id}>{e.name}</li>
            ))}
          </div>
        </div>
        <div>
          <h3>Addition information</h3>
          <NavLink to={'cast'} state={location.state}>
            <li>Cast</li>
          </NavLink>
          <NavLink to={'reviews'} state={location.state}>
            <li>Reviews</li>
          </NavLink>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </>
    );
  } catch {
    return;
  }
};
