import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "services/TMDBApi";


const MovieDetails = () => {
  const location = useLocation();
  

    const [film, setFilm] = useState({})

    const {id} = useParams();

    useEffect(()=>{
        const getFilm = async () => {
            setFilm(await getMovieDetails(id));
            
        }
        getFilm();

    },[id])

    return (
      <main>
        <Link to={location.state.back}>
          <button type="button">Go back</button>
        </Link>

        <section>
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.title}
          />
          <div>
            <h1>{film.title}</h1>
            <ul>
              <li>
                <p>User score: {Math.round(film.vote_average * 10)}%</p>
              </li>
              <li>
                <h2>Overview</h2>
                <p>{film.overview}</p>
              </li>
              <li>
                <h2>Genres</h2>
                <p>
                  {film.genres &&
                    film.genres.map(genre => genre.name).join(' ')}
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <ul>
            <li>
              <Link to="cast" state={{ back: location.state.back }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ back: location.state.back }}>
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </section>
      </main>
    );
}

export default MovieDetails;