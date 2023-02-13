import PropTypes from 'prop-types';
import FilmListItem from 'components/FilmListItem/FilmListItem';
import { List } from './FilmList.styled';

const FimlList = ({ films, location }) => {
  return (
    <List>
      {films.map(film => (
        <FilmListItem key={film.id} film={film} from={location} />
      ))}
    </List>
  );
};

FimlList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  location: PropTypes.shape({}).isRequired,
}

export default FimlList;
