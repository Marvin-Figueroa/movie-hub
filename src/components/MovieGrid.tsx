import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'
import { Spin, Typography } from 'antd'
import { CanceledError } from 'axios'

const { Text } = Typography

interface Movie {
  id: number
  title: string
}

interface FetchMoviesResponse {
  page: number
  results: Movie[]
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)

    apiClient
      .get<FetchMoviesResponse>('/discover/movie', {
        signal: controller.signal
      })
      .then((res) => setMovies(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return
        setError(error.message)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])

  return (
    <>
      {loading && <Spin size='large' />}
      {error && <Text type='danger'>{error}</Text>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  )
}

export default MovieGrid
