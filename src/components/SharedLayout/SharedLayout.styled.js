import { NavLink } from 'react-router-dom'
import  styled  from 'styled-components'


export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`
export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  box-sizing: border-box;
  height: 80px;
  padding: 20px 40px;
  background-color: #fff;
  border-bottom: 2px solid teal;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 32px;
`
export const Link = styled(NavLink)`
  padding: 8px 24px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: teal;
  }
`;