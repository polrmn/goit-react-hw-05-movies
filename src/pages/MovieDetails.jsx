import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "services/TMDBApi";
import { FilmInfoList, GoBackButton, LinkMore, MoreInfoList, MoreInfoWraper, Wraper } from "./MovieDetails.styled";

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
        <GoBackButton to={location.state.back}/>
        <Wraper>
          <img
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                : `https://skydomepictures.com/wp-content/uploads/2018/08/movie-poster-coming-soon-2.png`
            }
            alt={film.title}
          />
          <div>
            <h1>{film.title}</h1>
            <FilmInfoList>
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
            </FilmInfoList>
          </div>
        </Wraper>
        <MoreInfoWraper>
          <MoreInfoList>
            <li>
              <LinkMore to="cast" state={{ back: location.state.back }}>
                Cast
              </LinkMore>
            </li>
            <li>
              <LinkMore to="reviews" state={{ back: location.state.back }}>
                Reviews
              </LinkMore>
            </li>
          </MoreInfoList>
          <Outlet />
        </MoreInfoWraper>
      </main>
    );
}

export default MovieDetails;