import useMovieService from "../../service/MovieService"

import {useState, useEffect} from 'react'

import ErrorBoundary from "../errorBoundary/ErrorBoundary"

import MovieCarousel from "../movieCarousel/MovieCarousel"
import MainList from "../mainList/MainList"

const MainPage = () => {

    const [baseURL, setBaseURL] = useState('')

    const {getConfiguration} = useMovieService();

  useEffect(() => {
    getConfiguration().then(({ base_url, poster_sizes }) => setBaseURL(`${base_url}${poster_sizes[5]}`))
  }, [])

    return (
        <>
            
                <ErrorBoundary>
                    <MovieCarousel />
                </ErrorBoundary>

                <ErrorBoundary>
                    <MainList baseURL={baseURL} />
                </ErrorBoundary>
        </>
    )
}

export default MainPage;