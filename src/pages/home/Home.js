import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Home.css'
import MovieList from '../../components/movieList/MovieList';

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect (() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then((res) => res.json())
        .then((data)=> setPopularMovies(data.results))
    },[])

  return (
    <>
        <div className='poster'>
            <Carousel
                showThumbs = {false}
                autoPlay = {true}
                transitionTime = {5}
                infiniteLoop = {true}
                showStatus = {false}
                autoFocus={true}      
                swipeable={true}
                emulateTouch={true}
                interval={5000}
                useKeyboardArrows={true}
                width={"95%"}
            >
                {
                    popularMovies.map(movie => (
                        <Link to={`/movie/${movie.id}`}>
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt='' />
                            </div>

                            <div className='posterImage_overlay'>
                                <div className="posterImage_title">{movie ? movie.original_title: ""}</div>
                                <div className='posterImage_release'>
                                    {movie ? movie.release_date : ""}
                                    
                                    <span className='posterImage_rating'>
                                        {movie ? ((Math.floor(movie.vote_average*10))/10)  : ""}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                <div className='posterImage_description'>{movie ? movie.overview : ""}</div>
                            </div>
                        </Link>
                    ))
                }
            </Carousel>
        </div>

        <MovieList />
    </>
  )
}

export default Home