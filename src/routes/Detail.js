import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

function Detail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <Button />
      <div>
        <img src={movieDetail.large_cover_image} />
        <h2>
          {movieDetail.title} ({movieDetail.year})
        </h2>
        <h3>Genres</h3>
        <ul>
          {movieDetail.genres &&
            movieDetail.genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
        <h3>Runtime : {movieDetail.runtime}min</h3>
        <h3>Description</h3>
        <p>{movieDetail.description_full}</p>
      </div>
    </div>
  );
}

export default Detail;
