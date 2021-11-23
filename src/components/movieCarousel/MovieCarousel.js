import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Spinner from '../spinner/Spinner'

import MovieService from "../../service/MovieService";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./movieCarousel.css";

const MovieCarousel = ({onMovieSelect}) => {
  const [carouselData, setCarouselData] = useState([])
  const [loading, setLoading] = useState(true)

  const {getConfiguration, getTopRatedMovies} = MovieService();

  useEffect(() => {
    getConfiguration().then(({ base_url, poster_sizes }) => {
      getTopRatedMovies().then((data) => {
        const arr = data.map(item => {
          return {
            url: base_url.slice(0, -1) + "/" + poster_sizes[5] + item.poster_path,
            id: item.id,
          }
          }
        );
        setCarouselData(arr)
      });
    });
  }, [])

  useEffect(() => {
    setLoading(false)
  }, [carouselData])

  const renderItems = (items) => {
    const markup = items.map((item, i) => (
      <Link to={`/movie/${item.id}`} key={i}>
      <div className="item">
        <img src={item.url} alt="" height={300} />
      </div>
      </Link>

    ));
    return markup;
  };
    const spinner = loading ? <Spinner/> : null;
    const items = (! loading && carouselData.length) && renderItems(carouselData);
    const options = {
      items: 5,
      margin: 20,
      lazyLoad: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    };

    return (
      <div className="overfvow pt-2 bg-dark">
        <div className="container">
          {carouselData.length && (
            <OwlCarousel className="owl-theme" {...options}>
              {spinner}
              {items}
            </OwlCarousel>
          )}
        </div>
      </div>
    );
}

export default MovieCarousel;
