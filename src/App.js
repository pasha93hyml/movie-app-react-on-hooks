import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import MovieService from "./service/MovieService"

import ErrorBoundary from './components/errorBoundary/ErrorBoundary'

import NavBar from './components/NavBar/NavBar'
import MovieCarousel from "./components/movieCarousel/MovieCarousel"
import MoviesList from './components/moviesList/MoviesList'
import MoviePage from "./components/moviePage/MoviePage"
import "./App.css";

const App = () => {

  const [selectedGenreID, setSelectedGenreID] = useState(null)
  const [query, setQuery] = useState('')
  const [movieID, setMovieID] = useState(null)
  const [baseURL, setBaseURL] = useState('')

  const movieService = new MovieService();

  useEffect(() => {
    const {getConfiguration} = movieService;
    getConfiguration().then(({ base_url, poster_sizes }) => setBaseURL(`${base_url}${poster_sizes[5]}`))
  }, [])

  const onMovieSelect = (id) => {
    setMovieID(id)
  }

  const onGenreSelect = (id) => {
    setSelectedGenreID(id)
    setQuery('')
  }

  const onInputChange = (value) => {
    setQuery(value)
  }

  return (
    <Router>
      <div className="App">
      <ErrorBoundary>
        <NavBar 
          onGenreSelect={onGenreSelect}
          onInputChange={onInputChange}
        />
      </ErrorBoundary>
      <Switch>
        <Route exact path="/">
          <ErrorBoundary>
            <MovieCarousel onMovieSelect={onMovieSelect}/>
          </ErrorBoundary>

          <ErrorBoundary>
            <MoviesList 
              onMovieSelect={onMovieSelect}
              baseURL={baseURL}
            />
          </ErrorBoundary>
        </Route>
        
        <Route exact path={`/search=${query}`}>
          <ErrorBoundary>
            <MoviesList 
              onMovieSelect={onMovieSelect}
              query={query}
              baseURL={baseURL}
            />
          </ErrorBoundary>
        </Route>
        <Route exact path={`/genre/${selectedGenreID}`}>
          <ErrorBoundary>
            <MoviesList 
              onMovieSelect={onMovieSelect}
              selectedGenreID={selectedGenreID}
              baseURL={baseURL}
            />
          </ErrorBoundary>
        </Route>
        <Route exact path={`/${movieID}`}>
          <ErrorBoundary>
            <MoviePage baseURL={baseURL} movieID={movieID}/>
          </ErrorBoundary>
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App