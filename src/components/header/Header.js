import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link target='_blank' to="https://murdock9803.github.io/CinePhile-PC/"><img className='header_icon' src='https://murdock9803.github.io/CinePhile-PC/images/logoo.png' alt='site icon' /></Link>
            <Link to="/movies/popular"><span>POPULAR</span></Link>
            <Link to="/movies/top_rated"><span>TOP RATED</span></Link>
            <Link to="/movies/upcoming"><span>UPCOMING</span></Link>
        </div>

        <div className='headerRight'>
            <Link className='homelink' to="/"><span>HOME</span></Link>
            <Link target='_blank' to="https://murdock9803.github.io/Ayush-Portfolio/"><span>ABOUT-ME</span></Link>
        </div>
    </div>
  )
}

export default Header