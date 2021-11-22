import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import Spinner from '../spinner/Spinner'

import MovieService from '../../service/MovieService';

import "./MoviesList.css";
const MoviesList = ({onMovieSelect, selectedGenreID, query, baseURL}) => {
  
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [moviesData, setMoviesData] = useState([])
  const [page, setPage] = useState(1)
  const [newItemLoading, setNewItemLoading] = useState(false)
  const [main, setMain] = useState(true)
  const [genre, setGenre] = useState(false)
  const [search, setSearch] = useState(false)

  const movieService = new MovieService();


  useEffect(() => {
    //виключаю спінер
    setLoading(false)

    // рендеринг популярних фільмів
    onRequest()
    // console.log('mount');
  }, [])

  useEffect(() => {
    // при зміні пошукового слова або id жанру фільму
    setMoviesData([])
    setPage(1)
    setMain(!(query && selectedGenreID))
    setGenre(selectedGenreID)
    setSearch(query)
  }, [query, selectedGenreID])

  useEffect(() => {
    // після зміни одного із значень рендеримо нові дані
    onRequest()
  }, [main, genre, search])


  const onRequest = () => {
    onItemsLoading();
    if(main) {
      movieService.getPopularMovies(page)
      .then(onItemsLoaded)
      .catch(onError)
    } 
    if(genre) {
      movieService.getMoviesByGenre(page, selectedGenreID)
        .then(onItemsLoaded)
        .catch(onError)
    }
    if(search) {
      console.log('search');
      movieService.getSearchResults(page, query)
          .then(onItemsLoaded)
          .catch(error)
    }
  }

  const onItemsLoading = () => {
    setNewItemLoading(true)
  }

  const onItemsLoaded = (newMoviesData) => {
    setMoviesData([...moviesData, ...newMoviesData]) 
    setLoading(false)
    setNewItemLoading(false)   
    setPage(page + 1)
  }

  const onError = () => {
    setError(true)
    setLoading(false)
  }


  // функція-обертка, рендер списку фільмів
  const renderItems = (items) => {
    return items.map((item, i) => {
      return (
        <div key={i}>
          <Link to={`/${item.id}`} className="card" 
          onClick={() => {
            onMovieSelect(item.id)
          }}
          >
            <div className="card-ref">
              <img
                src={item.poster_path ? baseURL + item.poster_path : 'https://cdn.browshot.com/static/images/not-found.png'}
                className="card-img-top"
                alt={item.title}
                height="300"
              />
              <div className="card-body">
                <p className="card-title">{item.title}</p>
                <p className="card-text">{item.release_date}</p>
              </div>
            </div>
            <div className="item__name">{item.title}</div>
          </Link>
        </div>
      );
    });
  };
    const spinner = loading ? <Spinner/> : null;
    const content = !loading ? renderItems(moviesData) : null;
    const classes = moviesData.length && moviesData.length < 5 ? `row row-cols-1 row-cols-md-${moviesData.length} g-4` : 'row row-cols-1 row-cols-md-5 g-4'
    const display = (!moviesData.length || moviesData.length < 5) ? {display:'none'} : null
    return (
      <>
        <div className="bg-light pt-3">
        <div className="container">
          <div className={classes}>
            {spinner}
            {content}
            <button
              className="btn btn-secondary d-block mx-auto mb-3"
              type="button"
              disabled={newItemLoading}
              onClick={onRequest}
              style={display}
            >
              Load more
            </button>
          </div>
        </div>
        </div>
      </>
    );
  
}

export default MoviesList;
