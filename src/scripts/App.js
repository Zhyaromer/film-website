import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import A from '../Pages/A';
import Films from '../Pages/Films.jsx';
import Series from '../Pages/Series.jsx';
import MovieSeries from '../Pages/MovieSeries.jsx';
import Suggestion from '../Pages/Suggestion.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<A />} />
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movie-series" element={<MovieSeries />} />
        <Route path="/suggestion" element={<Suggestion />} />
      </Routes>
    </Router>
  );
}

export default App;
