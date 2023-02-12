import FimlList from "components/FilmList/FilmList";
import SearchForm from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { useLocation, } from "react-router-dom";
import { getMovieByQuery } from "services/TMDBApi";


const Movies = () => {
    const location = useLocation();

    const [searchedMovies, setSearchedMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    
    useEffect(()=>{
        const getSearchingFilms = async () => {
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