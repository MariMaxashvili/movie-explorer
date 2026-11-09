import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import { getPopularMovies } from "../api/tmdb";
import MovieList from "../components/MovieList";
function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function load() {
      try {
        const data = await getPopularMovies();
        setMovies(data.results);
      } catch (err) {
        console.error(err);
        console.error(err);
        setError("Could not load movies. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;
  return (
    <section>
      <h1>Popular Movies:</h1>
      <MovieList movies={movies} />
    </section>
  );
}

export default Home;
