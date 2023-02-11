import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieCast } from "services/TMDBApi";

const Cast = () => {

    const [cast, setCast] = useState([]);

    const { id } = useParams();

    useEffect(() => {
      const getCast = async () => {
        const fullCast = await getMovieCast(id);
        const mainCast = fullCast.slice(0, 10);
        setCast(mainCast);
      };
      getCast();
    }, [id]);

    return (
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <h2>{actor.name}</h2>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    );
}

export default Cast