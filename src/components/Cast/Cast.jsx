import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieCast } from "services/TMDBApi";
import { CastList } from "./Cast.styled";

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
      <CastList>
        {cast.map(actor => (
          <li key={actor.cast_id}>
            <img
              src={
                actor.profile_path ?
                `https://image.tmdb.org/t/p/w500${actor.profile_path}` :
                'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
              }
              alt={actor.name}
              width="360"
            />
            <h2>{actor.name}</h2>
            <p>Character: {actor.character || 'Unknown'}</p>
          </li>
        ))}
      </CastList>
    );
}

export default Cast