import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  console.log(movieDetail);
  return (
    <div>
      <img src={movieDetail.large_cover_image} />
      <h2>
        {movieDetail.title} ({movieDetail.year})
      </h2>
      <ul>
        {movieDetail.genres &&
          movieDetail.genres.map((g) => <li key={g}>{g}</li>)}
      </ul>
      <h3>runtime : {movieDetail.runtime}minute</h3>
      <p>{movieDetail.description_full}</p>
    </div>
  );
}

export default Detail;
