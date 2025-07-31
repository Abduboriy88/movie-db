import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import "../css/Home.css"
import { getPopularMovies, getAnimationMovies, searchMovies} from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loadind, setLoading] = useState(true)

  useEffect(() => {
    const LoadPopularMovies = async () => {
      try{
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch (err) {
        setError("Failed to load movies...")
      }
      finally{
        setLoading(false)
      }
    }
     LoadPopularMovies()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (! searchQuery.trim()) return
    if (loadind) return

    setLoading(true)

    try {
      const searchResults = await searchMovies(searchQuery)
      setMovies (searchResults)
      setError(null)
    } catch (err)  {
       console.log(err)
       setError("Failed to search movies...")
    } finally {
      setLoading(false)
    }
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
            Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}

  {loadind ? (
    <div className="loading">Loading...</div>
  ) : (
     <div className="movies-grid">
        {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
  )}
     
    </div>
  );
}

export default Home;
