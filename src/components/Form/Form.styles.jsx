import { AiOutlineSearch } from 'react-icons/ai';

const { styled } = require('styled-components');

export const Forma = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 8px 32px 8px 8px;
  width: 250px;
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 2px solid rgb(8, 6, 138);
  outline: none;
  &:focus {
    border-bottom: 2px solid rgb(197, 9, 9);
  }
`;
export const Icon = styled(AiOutlineSearch)`
  width: 25px;
  height: 25px;
  position: relative;
  right: 32px;
  z-index: 1;
  opacity: 0.7;
`;
