import { notFound } from "next/navigation"
import HomeContainer from "@/containers/home"
import MoviesSection from "@/mocks/movies.json"

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function HomePage({ params }) {
  await delay(2500)

  let selectedCategory

  if (params.category?.length > 0) {
    selectedCategory = true
  }

  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? MoviesSection.results.slice(0, 7) : [],
      }}
    />
  )
}

export default HomePage
