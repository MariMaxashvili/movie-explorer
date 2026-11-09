import type { Movie } from "../types/movie";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
}
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
function MovieCard({ movie }: MovieCardProps) {
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "N/A";
  const rating = movie.vote_average.toFixed(1);
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      {movie.poster_path ? (
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={`${movie.title} poster`}
          loading="lazy"
        />
      ) : (
        <div className="movie-card-no-poster">No poster</div>
      )}
      <h2>{movie.title}</h2>
      <p>{year}</p>
      <p>{rating}</p>
    </Link>
  );
}

export default MovieCard;
