import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import Movie from './pages/movieDetail/Movie';
import Error from './pages/error/Error';
import Footer from './components/footer/Footer';

function App() {

  const basename = process.env.NODE_ENV === "production" ? "/CinePhile-MDB" : "";

  return (
    <div className="App">

      <Router basename={basename}>
        <Header />

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<Movie />}></Route>
          <Route path='movies/:type' element={<MovieList />}></Route>
          <Route path='/movie/*' element={<Error />}></Route>
          <Route path='/movies/*' element={<Error />}></Route>
          <Route path='/*' element={<Error />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
