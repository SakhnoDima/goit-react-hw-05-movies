import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import defaultImg from '../Pictures/vecteezy_icon-image-not-found-vector_.jpg';

export const ListItem = styled.li`
  padding: 4px 4px;
  border-bottom: 1px solid transparent;
  position: relative;
`;

export const LinkItem = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 16px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:hover::after,
  &:focus::after {
    content: '';
    background-image: ${props =>
      props.cover
        ? `url('https://image.tmdb.org/t/p/w500/${props.cover}')`
        : `url(${defaultImg})`};

    background-size: cover;
    width: 160px;
    height: 240px;
    display: block;
    border-radius: 4px;
    border: 1px solid rgba(43, 134, 197);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: -140px;
    left: 400px;
    z-index: 1;
  }
`;
