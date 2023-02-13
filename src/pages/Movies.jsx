import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { useLocation, } from "react-router-dom";
import { Notify } from "notiflix";
import FimlList from "components/FilmList/FilmList";
import SearchForm from "components/SearchForm/SearchForm";
import { getMovieByQuery } from "services/TMDBApi";


const Movies = () => {
    const location = useLocation();

    const [searchedMovies, setSearchedMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    
    useEffect(()=>{
        const getSearchingFilms = async () => {
          const answer = await getMovieByQuery(query);
          console.log(answer);
          if (answer.length === 0) {
            Notify.failure('No results');
            return
          }
          setSearchedMovies(await getMovieByQuery(query));
        };
        if (query !== '') {
          getSearchingFilms();
        }
    },[query])

    const handleFormSubmit = (query) => {
      setSearchParams(query !== '' ? {query: query} : {})
    }
    return (
      <main>
        <SearchForm onSubmit={handleFormSubmit} />
        {searchedMovies.length > 0 && (
          <FimlList films={searchedMovies} location={location} />
        )}
      </main>
    );
}

export default Movies