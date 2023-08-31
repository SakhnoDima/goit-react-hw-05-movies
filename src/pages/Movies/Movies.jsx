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
  const [total, setTotal] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmId = searchParams.get('q') ?? '';
  const pageParam = searchParams.get('page') ?? 1;

  useEffect(() => {
    console.log(`pageParam-- ${pageParam}`);
    console.log(`filmId -- ${filmId}`);

    if (pageParam === 1 && filmId === '') {
      console.log('нет запроса');
      return;
    }
    const fetchFilmByKey = async () => {
      try {
        console.log(`запрос`);
        setLoading(true);
        const { results, page, total_pages } = await fetchMovieByDetails(
          filmId,
          pageParam
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
  }, [filmId, pageParam]);

  const handlePageChange = event => {
    const action = event.target.name;
    switch (action) {
      case 'inc':
        console.log(total);
        setSearchParams({ q: filmId, page: Number(pageParam) + 1 });

        break;
      case 'dec':
        setSearchParams({ q: filmId, page: Number(pageParam) - 1 });

        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Movies</h2>
      <Form />
      {loading && <Loader />}
      <MoviesList films={films} />
      <Buttons page={pageParam} total={total} onClick={handlePageChange} />
    </div>
  );
};

export default Movies;
