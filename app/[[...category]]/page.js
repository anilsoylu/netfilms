import { notFound } from "next/navigation"
import HomeContainer from "@/containers/home"
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpComingMovies,
  fetchGenres,
  fetchMoviesByGenre,
} from "@/services/movie"

async function HomePage({ params }) {
  const pagePromises = [
    fetchPopularMovies(),
    fetchTopRatedMovies(),
    fetchUpComingMovies(),
    fetchGenres(),
  ]

  if (!!params.category?.length) {
    pagePromises.push(fetchMoviesByGenre(params.category[0]))
  }

  const [
    popularMovies,
    topRatedMovies,
    upComingMovies,
    genres,
    selectedCategoryMovies,
  ] = await Promise.all(pagePromises)

  return (
    <HomeContainer
      categories={genres}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      upComingMovies={upComingMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategoryMovies ?? [],
      }}
    />
  )
}

export default HomePage
