import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import A from '../Pages/A';
import Films from '../Pages/Films.jsx';
import Series from '../Pages/Series.jsx';
import MovieSeries from '../Pages/MovieSeries.jsx';
import Suggestion from '../Pages/Suggestion.jsx';
import News from '../Pages/News.jsx'
import FilmDetails from '../Pages/FilmDetails.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<A />} />
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movie-series" element={<MovieSeries />} />
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/News" element={<News />} />
        <Route path="/filmdetails" element={<FilmDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
