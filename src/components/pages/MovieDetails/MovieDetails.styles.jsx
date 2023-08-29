import styled from 'styled-components';

export const Section = styled.div`
  padding: 16px;
`;

export const SectionTitle = styled.h1`
  margin-bottom: 16px;
`;
export const ButtonGoBack = styled.button`
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
`;

export const CardFilm = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const Image = styled.img`
  max-height: 500px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const CardTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const OverviewTitle = styled.h3`
  margin-top: ${({ theme }) => theme.spacing(50)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;
