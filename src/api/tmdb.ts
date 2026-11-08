import type { Movie, MovieDetails, PaginatedResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

async function request<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`TMDB request failed: ${response.status}`);
  const data = await response.json();
  return data;
}

export function getPopularMovies(page = 1) {
  return request<PaginatedResponse<Movie>>(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`,
  );
}

export function getTopRatedMovies(page = 1) {
  return request<PaginatedResponse<Movie>>(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`,
  );
}

export function searchMovies(query: string, page = 1) {
  return request<PaginatedResponse<Movie>>(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`,
  );
}

export function getMovieDetails(id: number) {
  return request<MovieDetails>(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos`,
  );
}
