import styled from 'styled-components';

export const ListItem = styled.li`
  box-sizing: border-box;
  max-width: calc(100% / 4 - 16px);
  padding: 12px;
  width: 100%;
  display: block;
  background: linear-gradient(30deg, teal, transparent);
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  > a {
    text-decoration: none;
    > p {
      color: #fff;
    }
  }
`;

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 390px;
`