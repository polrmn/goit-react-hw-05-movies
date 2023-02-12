import FilmListItem from "components/FilmListItem/FilmListItem";
import { List } from "./FilmList.styled";


const FimlList = ({films, location}) => {

    return (
      <List>
        {films.map(film => (
          <FilmListItem key={film.id} film={film} from={location} />
        ))}
      </List>
    );
}

export default FimlList