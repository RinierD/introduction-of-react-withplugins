import { useEffect, useState } from "react";
import MovieComponent from "../components/movie_components.js";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // Same code from above but with hardcoded once
  //   useEffect(() => {
  //     fetch(
  //       `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
  //     )
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setMovies(json.data.movies);
  //         setLoading(false);
  //       });
  //   }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieComponent
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image} // I've change the props name with the shorter one "coverImg"
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
