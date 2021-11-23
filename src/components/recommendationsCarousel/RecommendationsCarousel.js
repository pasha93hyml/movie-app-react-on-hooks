import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const RecommendationsCarousel = ({ data, baseURL }) => {
  const renderItems = (items) => {
    return items.map((item, i) => (
      <Link to={`/movie/${item.id}`} key={i}>
        <div className="item">
          <img
            src={
              item.poster_path
                ? baseURL + item.poster_path
                : "https://cdn.browshot.com/static/images/not-found.png"
            }
            alt=""
            height={300}
          />
        </div>
      </Link>
    ));
  };

  const options = {
    items: 5,
    margin: 20,
    lazyLoad: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  };

  const markup = renderItems(data);

  return (
    <div className="overfvow pt-2 bg-dark">
      <div className="container">
        <OwlCarousel className="owl-theme" {...options}>
          {markup}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default RecommendationsCarousel;
