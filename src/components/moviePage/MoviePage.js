import { useState, useEffect } from "react";

import Spinner from "../spinner/Spinner";

import MovieService from "../../service/MovieService";

import "./moviePage.css";

const MoviePage = ({ baseURL, movieID }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [itemData, setItemData] = useState(null);
  const [itemID, setItemID] = useState(null)

  const movieService = new MovieService();

  useEffect(() => {
    setItemID(movieID)
  }, [movieID]);

  useEffect(() => {
      if(itemID) {
        onRequest()
      }
  }, [itemID]) 

  const onRequest = () => {
      movieService.getDetails(itemID).then(onMovieLoaded).catch(onError)
  }

  const onMovieLoaded = (data) => {
      console.log(data);
    setLoading(false);
    setItemData(data);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const renderItem = (data) => {
    return (
      <>
        <div className="title">
          <div className="title_wrapper">
            <h3>{data.title}</h3>
            <p>{data.original_title}</p>
          </div>
        </div>
        <div className="poster">
          <img
            src={
              baseURL
                ? baseURL + data.poster_path
                : "https://cdn.browshot.com/static/images/not-found.png"
            }
            alt={data.title}
          />
          <div className="rate">Популярность фильма: {data.popularity}</div>
        </div>
        <div className="player">Тут мог бы быть плеер</div>
        <div className="details">
          {data.overview.length ? data.overview : "Нет описания данного фильма"}
        </div>
        <div className="description">
          <div className="sub_grid">
            <div className="sub_title">Год</div>
            <div className="sub_descr">{data.release_date}</div>
            <div className="sub_title">Страна</div>
            <div className="sub_descr">
              {data.production_countries.map((item, i) => {
                if (i + 1 === data.production_countries.length) {
                  return item + ".";
                }
                return item + ", ";
              })}
            </div>
            <div className="sub_title">Жанр</div>
            <div className="sub_descr">
              {data.genres.map((item, i) => {
                if (i + 1 === data.genres.length) {
                  return item + ".";
                }
                return item + ", ";
              })}
            </div>
            <div className="sub_title">Время</div>
            <div className="sub_descr">{data.runtime}</div>
          </div>
        </div>
      </>
    );
  };

  const style = loading ? {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr'
  } : null
  const spinner = loading ? <Spinner /> : null;
  const content = (!loading && itemData) ? renderItem(itemData) : null;

  return (
    <div className="movie" style={style}>
      {spinner}
      {content}
    </div>
  );
};

export default MoviePage;
