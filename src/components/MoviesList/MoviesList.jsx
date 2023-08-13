import { useLocation } from 'react-router-dom';
import { NavSearch } from './MoviesList.styled';
import { SearchMoviesNavLink } from './MoviesList.styled';
import PropTypes from 'prop-types';
export const MoviesList = ({ MoviesArry }) => {
  const location = useLocation();
  if (MoviesArry) {
    return (
      <>
        <NavSearch>
          {MoviesArry.map(elem => {
            return elem.title ? (
              <SearchMoviesNavLink
                state={{ from: location }}
                key={elem.id}
                to={`/movies/` + elem.id}
              >
                {elem.title}
              </SearchMoviesNavLink>
            ) : null;
          })}
        </NavSearch>
      </>
    );
  }
  return;
};
MoviesList.propTypes = {
  imgApiMass: PropTypes.array.isRequired
};
