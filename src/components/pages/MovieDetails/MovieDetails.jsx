import { fetchMovieById } from 'components/helpers/fetchFunctions';
import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import defaultImg from '../../Pictures/vecteezy_icon-image-not-found-vector_.jpg';
import {
  ButtonGoBack,
  CardFilm,
  CardTitle,
  Image,
  OverviewTitle,
  Section,
  SectionTitle,
} from './MovieDetails.styles';

const Product = () => {
  const [film, setFilm] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const { data } = await fetchMovieById(movieId);
        setFilm(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchFilms();
  }, [movieId]);
  console.log(film);
  return (
    <Section>
      <SectionTitle>Film details</SectionTitle>
      <Link to={backLinkLocationRef.current}>
        <ButtonGoBack>Go back</ButtonGoBack>
      </Link>
      <CardFilm>
        <Image
          src={
            film.poster_path
              ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
              : `${defaultImg}`
          }
          alt={film.title}
        />
        <div>
          <CardTitle>{film.title}</CardTitle>
          <p>Release Date - {film.release_date}</p>
          <OverviewTitle>Overview</OverviewTitle>
          <p>{film.overview}</p>
        </div>
      </CardFilm>
      <ul>
        <li>
          <Link to="cast">
            <ButtonGoBack>Cast</ButtonGoBack>
          </Link>
        </li>
        <li>
          <Link to="reviews">
            <ButtonGoBack>Reviews</ButtonGoBack>
          </Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading Details...</div>}>
        <Outlet />
      </Suspense>
    </Section>
  );
};

export default Product;
