import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
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

FilmListItem.propTypes = {
  film: PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      original_title: PropTypes.string,
      id: PropTypes.number.isRequired,
    }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,

  })
}

export default FilmListItem