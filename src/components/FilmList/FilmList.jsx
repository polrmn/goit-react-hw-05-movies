import FilmListItem from "components/FilmListItem/FilmListItem";


const FimlList = ({films, location}) => {

    return (
      <ul>
        {films.map(film => (
          <FilmListItem key={film.id} film={film} from={location} />
        ))}
      </ul>
    );
}

export default FimlList