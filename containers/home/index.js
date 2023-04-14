import React from "react"

import FeaturedMovie from "@/components/featured-movie"
import Categories from "@/components/categories"
import MoviesSection from "@/components/movies-section"

function HomeContainer({
  topRatedMovies = [],
  popularMovies = [],
  upComingMovies = [],
  categories = [],
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {!!selectedCategory.movies.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
      <MoviesSection
        title="Top Rated Movies"
        movies={topRatedMovies.slice(1, 7)}
      />
      <MoviesSection
        title="Pouplar Movies"
        movies={popularMovies.slice(1, 7)}
      />
      <MoviesSection
        title="Upcoming Movies"
        movies={upComingMovies.slice(1, 7)}
      />
    </div>
  )
}

export default HomeContainer
