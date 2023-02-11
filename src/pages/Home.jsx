import FimlList from "components/FilmList/FilmList";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTrendingMovies } from "services/TMDBApi"


const Home = () => {
  const location = useLocation();

    const[trendingMovies, setTrendingMovies] = useState([]);

    useEffect(()=>{
        const getFilms = async () => {
          setTrendingMovies(await getTrendingMovies());
        };
        getFilms();
    },[])

    return (
      <main>
        <h1>Trending today</h1>
        <FimlList films={trendingMovies} location={location} />
      </main>
    );
}

export default Home