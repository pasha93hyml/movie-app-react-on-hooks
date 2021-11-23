import {useHttp} from '../hooks/http.hook'

const useMovieService = () =>  {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://api.themoviedb.org/3/'
    const _apiKey = 'api_key=e352cfad536dcafc2d9540798bc763ce';

    const getConfiguration = async () => {
        const res = await request(`${_apiBase}configuration?${_apiKey}`)
        return res.images
    }

    const getTopRatedMovies = async () => {
        const res = await request(`${_apiBase}movie/top_rated?${_apiKey}&language=ru-RU&page=10`)
        return res.results.map(modifiedItem)
    }
    
    const getPopularMovies = async (page = 1) => {
        const requesturl = `${_apiBase}movie/popular?${_apiKey}&language=ru-RU&page=${page}`
        const res = await request(requesturl)

        return res.results.map(modifiedItem)
    }

    const getGenres = async () => {
        const res = await request(`${_apiBase}genre/movie/list?${_apiKey}&language=ru-RU`)

        return res.genres;
    }


    const getMoviesByGenre = async (page = 1, id) => {
        const requestUrl = `${_apiBase}discover/movie?${_apiKey}&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false{true}&page=${page}&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=${id}`
        const res = await request(requestUrl)
        return res.results;
    }

    const getSearchResults = async (page = 1, query) => {
        const res = await request(`${_apiBase}search/movie?${_apiKey}&language=ru-RU&page=${page}&query=${query}`)
        return res.results.map(modifiedItem);
    }

    const getDetails = async (id) => {
        const responseUrl = `${_apiBase}movie/${id}?${_apiKey}&language=ru-RU`
        const res = await request(responseUrl)
        return modifyMovieItem(res);
    }

    const getRecommendations = async (id) => {
        const responseUrl = `${_apiBase}movie/${id}/recommendations?${_apiKey}&language=ru-RU&page=1`
        const res = await request(responseUrl)
        return res.results.map(modifiedItem);
    }

    const modifiedItem = (item) => {
        return {
            id: item.id,
            title: item.title,
            overview: item.overview,
            poster_path: item.poster_path,
            release_date: item.release_date.slice(0, 4)
        }
    }

    const modifyMovieItem = (item) => ({
        poster_path: item.poster_path,
        genres: [...item.genres.map(genre => genre.name)],
        overview: item.overview,
        popularity: item.popularity,
        production_companies: [...item.production_companies.map(companie => companie.name)],
        production_countries: [...item.production_countries.map(country => country.name)],
        release_date: item.release_date.slice(0, 4),
        runtime: item.runtime + ' мин',
        title: item.title,
        budget: item.budget + '$',
        original_title: item.original_title
    })
    
    return {loading, error, clearError, getConfiguration, getTopRatedMovies, getPopularMovies, getGenres, getMoviesByGenre, getSearchResults, getDetails, getRecommendations}
}
export default useMovieService;


// "request_token": "38093ceeb15e8e9f1254b1c3d6325084c2a3c21e"


// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzUyY2ZhZDUzNmRjYWZjMmQ5NTQwNzk4YmM3NjNjZSIsInN1YiI6IjYxNTYwMWFmZDIxNDdjMDA2MzMwN2NjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OxWmaxs_4xTBKW6LSbKGyObrGpVspdImhG2tUGagaeA

// session fac3f03c2da337d9afc1ddbd011f8d9bfd4f2a1b