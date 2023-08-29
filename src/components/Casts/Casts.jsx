import { fetchMovieCasts } from 'components/helpers/fetchFunctions';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultImg from '../Pictures/vecteezy_icon-image-not-found-vector_.jpg';

const Casts = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fatchCasts = async () => {
      try {
        const { cast } = await fetchMovieCasts(movieId);
        setCasts(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    fatchCasts();
  }, [movieId]);

  return (
    <div>
      {casts.length === 0 ? (
        <p>Not have cast for this film </p>
      ) : (
        <ul>
          {casts.map(({ credit_id, name, profile_path }) => (
            <li key={credit_id}>
              <img
                width={300}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : `${defaultImg}`
                }
                alt=""
              />
              <h3>{name}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Casts;
