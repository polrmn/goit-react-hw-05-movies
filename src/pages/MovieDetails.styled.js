import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoBackButton = styled(Link)`
  display: block;
  box-sizing: border-box;
  padding: 15px;
  margin: 15px;
  position: fixed;
  z-index: 1999;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-image: url('https://svgsilh.com/svg/97591.svg');
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
  border-radius: 50%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.2);
    border: 4px solid teal;    
  }
`;

export const Wraper = styled.section`
  display: flex;
  gap: 24px;
  padding: 10px 0;
`;

export const FilmInfoList = styled.ul`
  list-style: none;
  padding: 0;
`

export const MoreInfoWraper = styled.section`

`;

export const MoreInfoList = styled.ul`
  margin: 0;
  padding: 20px 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  & > li {
    max-width: 30%;
    width: 100%;
    padding: 4px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    &:hover {
      background: linear-gradient(30deg, teal, transparent);
    }
    & a {
      display: block;
      text-decoration: none;
      color: #000;
    }
  }
`;

