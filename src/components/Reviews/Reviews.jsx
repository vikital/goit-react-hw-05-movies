import { fetchReviewsMovies } from 'apiMovies/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const Reviews = () => {
  const { id } = useParams();
  const [reviewsArry, setReviewsArry] = useState([]);
  const reviewsMovies = async id => {
    const response = await fetchReviewsMovies(id);
    return response;
  };
  useEffect(() => {
    reviewsMovies(id).then(response => {
      setReviewsArry(response.data.results);
    });
     // eslint-disable-next-line
  }, []);
  return (
    <>
      <ul>
        {reviewsArry.length ? (
          reviewsArry.map((e, i) => {
            return (
              <li key={i}>
                <h3>{e.author}</h3>
                <p>{e.content}</p>
              </li>
            );
          })
        ) : (
          <p>Sorry we don`t have reviews</p>
        )}
      </ul>
    </>
  );
};
