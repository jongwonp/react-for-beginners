import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

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
  return <div>Detail</div>;
}

export default Detail;
