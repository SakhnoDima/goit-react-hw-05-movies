import MoviesList from 'components/MoviesList/MoviesList';
import { fetchPopular } from 'components/helpers/fetchFunctions';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchPopularFilms = async () => {
      try {
        const { results } = await fetchPopular();
        setPopular(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPopularFilms();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      {popular.length !== 0 ? (
        <MoviesList popularFilms={popular} />
      ) : (
        <p>Films not found</p>
      )}
    </div>
  );
};

export default Home;
