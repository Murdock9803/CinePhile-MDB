import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    {
        <div className="bottom" id="bottom">
        <div className="bottom-h1">
          <h1><tt>Reach out to us on more Platforms!</tt></h1>
        </div>
        <div className="social-icons">
          <a target="_blank" href="mailto:ayushsahu9803@gmail.com" rel="noreferrer"
            ><i className="fa-regular fa-envelope"></i
          ></a>
          <a target="_blank" href="https://github.com/Murdock9803" rel="noreferrer"
            ><i className="fa-brands fa-github"></i
          ></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ayush-sahu-25b329230" rel="noreferrer"
            ><i className="fa-brands fa-linkedin"></i
          ></a>
        </div>
        <div className="copyright">© <a target='_blank' href='https://murdock9803.github.io/Ayush-Portfolio/'>AYUSH SAHU</a> 2023. Powered by <a target='_blank' href='https://developer.themoviedb.org/reference/intro/getting-started'>TMDB API</a></div>
      </div>
    }
    </>
  )
}

export default Footer