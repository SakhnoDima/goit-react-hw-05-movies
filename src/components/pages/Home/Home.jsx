import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchPopular } from 'components/helpers/fetchFunctions';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPopularFilms = async () => {
      try {
        setLoading(true);

        const { results } = await fetchPopular();
        setPopular(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPopularFilms();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      {loading && <Loader />}
      <MoviesList films={popular} />
    </div>
  );
};

export default Home;
