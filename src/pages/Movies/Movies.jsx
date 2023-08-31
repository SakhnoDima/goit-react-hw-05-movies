import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMovieByDetails } from 'components/helpers/fetchFunctions';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import Form from 'components/Form/Form';
import Buttons from 'components/LoadButton/Buttons';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageS, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmId = searchParams.get('q') ?? '';

  useEffect(() => {
    console.log(`pageS -- ${pageS}`);
    console.log(`filmId -- ${filmId}`);

    if (pageS === 0 && filmId === '') {
      console.log('нет запроса');
      return;
    }
    const fetchFilmByKey = async () => {
      try {
        console.log(`запрос`);
        setLoading(true);
        const { results, page, total_pages } = await fetchMovieByDetails(
          filmId,
          pageS
        );
        setFilms(results);
        setTotal(total_pages);

        if (page > 1 && page === total_pages) {
          toast.info('Its last page', {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true,
            theme: 'light',
          });
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchFilmByKey();
  }, [filmId, pageS]);

  const updateQueryString = event => {
    event.preventDefault();
    setPage(1);
    console.log(pageS);
    const searchQuery = event.target.searchQuery.value.trim();
    if (searchQuery === '') {
      toast.error('Enter film details', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        theme: 'light',
      });
      return setSearchParams({});
    }
    setSearchParams({ q: searchQuery });
  };

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
      <h2 style={{ marginBottom: 16 }}>Movies</h2>
      <Form value={filmId} updateQueryString={updateQueryString} />
      {loading && <Loader />}
      <MoviesList films={films} />
      <Buttons page={pageS} total={total} onClick={handlePageChange} />
    </div>
  );
};

export default Movies;
