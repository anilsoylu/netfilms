import { notFound } from "next/navigation"
import MovieContainer from "@/containers/movie"

import { fetchSingleMovie } from "@/services/movie"

export async function generateMetadata({ params }) {
  const movieDetail = await fetchSingleMovie(params.id)

  if (movieDetail) {
    return {
      title: movieDetail.title,
      description: movieDetail.overview,
      image: `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`,
    }
  } else {
    return {
      title: "Movie not found",
      description: "The movie you are looking for could not be found.",
    }
  }
}

async function MoviePage({ params, searchParams }) {
  const movieDetail = await fetchSingleMovie(params.id)

  if (!movieDetail) notFound()

  if (searchParams.error === "true") {
    throw new Error("Error happened")
  }

  return <MovieContainer movie={movieDetail} />
}

export default MoviePage
