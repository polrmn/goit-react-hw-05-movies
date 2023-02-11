import { Link, useLocation } from "react-router-dom";

const FilmListItem = ({film, from}) => {

  const location = useLocation();
  
    return (
      <li>
        <Link
          to={location.pathname === '/' ? `movies/${film.id}` : `${film.id}`}
          // state={location.pathname === '/' ? {from: '/'} : {from: '/movies'}}
          state={{back: from}}
        >
          <p>{film.original_title}</p>
        </Link>
      </li>
    );
}

export default FilmListItem