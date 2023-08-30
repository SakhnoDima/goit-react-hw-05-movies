import { styled } from 'styled-components';

export const ButtonSection = styled.div`
  margin-top: 16px;
  display: flex;
`;
export const Button = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 16px;
  margin: 0px 16px 16px 0px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.regular};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.accent};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;
