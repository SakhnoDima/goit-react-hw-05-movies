import Buttons from 'components/LoadButton/Buttons';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchPopular } from 'components/helpers/fetchFunctions';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchPopularFilms = async () => {
      try {
        setLoading(true);
        const { data } = await fetchPopular(page);
        const { results, total_pages } = data;
        // console.log(data);
        setPopular(results);
        setTotal(total_pages);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPopularFilms();
  }, [page]);

  const handlePageChange = event => {
    const action = event.target.name;
    switch (action) {
      case 'inc':
        setPage(prev => prev + 1);
        break;
      case 'dec':
        setPage(prev => prev - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Trending Movies</h2>
      {loading && <Loader />}
      <MoviesList films={popular} />
      <Buttons page={page} total={total} onClick={handlePageChange} />
    </div>
  );
};

export default Home;
