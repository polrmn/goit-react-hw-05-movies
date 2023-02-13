import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  & > li {
    display: flex;
    max-width: 100%;
    flex-direction: column;
    gap: 12px;
    text-align: start;
    border-bottom: 4px solid teal;
    padding-bottom: 8px;
    & > h2 {
      margin: 0;
    }
    & > p {
      margin: 0;
    }
  }
`;