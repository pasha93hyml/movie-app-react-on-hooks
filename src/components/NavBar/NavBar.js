import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieService from "../../service/MovieService";
import "./NavBar.css";

const NavBar = ({onGenreSelect, onInputChange, onHomeBtn}) => {

  const [genres, setGernres] = useState([])
  const [dropMenu, setDropMenu] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    movieService.getGenres().then(data => setGernres(data))
  }, [])

  const movieService = new MovieService();

  const toggleDropMenu = () => {
    setDropMenu(!dropMenu)
  }

  const renderItems = (items) => {
    return items.map((item, i) => (
      <li key={i} onClick={() => {
        onGenreSelect(item.id)
        toggleDropMenu()
        }}>
        <Link to={`/genre/${item.id}`} className="dropdown-item">
          {item.name}
        </Link>
      </li>
    ));
  };
    const markup = genres.length && renderItems(genres);
    const style = {
      'display': 'grid',
      gridTemplateRows: '1fr 1fr 1fr',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: '2vw',
    }
    return (
      <div className="nav-wrapper">
        <div className="container">
        <Link to="/"
                className="btn btn-secondary mr-3"
                type="button"
                onClick={() => {
                  onHomeBtn()
                }}
              >
                Home page
              </Link>
          <div className="dropdown">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={toggleDropMenu}
              >
                Жанры
              </button>
              {dropMenu && 
                <ul className="dropdown-menu" style={style}>
                  {markup}
                </ul>
              }
          </div>

          <div className="search-container">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search.."
                name="search"
                value={query}
              />
              <Link to={`/search=${query}`}>
                <button 
                  onClick={() => {
                    onInputChange(query)
                    setQuery('')
                  }} 
                  type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </Link>
              
            </form>
          </div>
        </div>
      </div>
    );
}

export default NavBar;