import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link, Nav } from "./SharedLayout.styled";


const SharedLayout = () => {
    return (
      <Container>
        <Header>
          <Nav>
            <Link to="/" end>Home</Link>
            <Link to="movies" state={{ from: '/' }}>
              Movies
            </Link>
          </Nav>
        </Header>
        <Suspense fallback={<div>Loading page...</div>}>
            <Outlet/>
        </Suspense>
      </Container>
    );
}

export default SharedLayout