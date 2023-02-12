import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  padding: 0;
  gap: 8px;
  flex-wrap: wrap;
  margin: 0;
  list-style: none;
  
  justify-content: space-around;
  & > li {
    max-width: 30%;
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    border-radius: 4px;
    background: linear-gradient(30deg, teal, transparent);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.05)
    }
    & > img {
        max-width: 100%;
        width: 100%
    }
`;