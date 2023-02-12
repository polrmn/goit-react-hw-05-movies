import { Link, useLocation } from "react-router-dom";
import { Image, ListItem } from "./FilmListItem.styled";

const FilmListItem = ({film, from}) => {

  const location = useLocation();
  
    return (
      <ListItem>
        <Link
          to={location.pathname === '/' ? `movies/${film.id}` : `${film.id}`}
          state={{ back: from }}
        >
          <Image
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                : `https://skydomepictures.com/wp-content/uploads/2018/08/movie-poster-coming-soon-2.png`
            }
            alt={film.title || film.original_title}
          />
          <p>{film.title || film.original_title}</p>
        </Link>
      </ListItem>
    );
}

export default FilmListItem