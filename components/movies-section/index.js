import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./styles.module.css"

function MoviesSection({ title, movies }) {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoviesSection
