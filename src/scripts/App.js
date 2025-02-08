import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import A from '../Pages/A';
import Films from '../Pages/Films.jsx';
import Series from '../Pages/Series.jsx';
import MovieSeries from '../Pages/MovieSeries.jsx';
import Suggestion from '../Pages/Suggestion.jsx';
import News from '../Pages/News.jsx'
import FilmDetails from '../Pages/FilmDetails.jsx';
import SerieDetails from '../Pages/SerieDetails.jsx';
import Loginpage from '../Pages/Login.jsx'
import Signuppage from '../Pages/Signup.jsx'
import Profile from '../Pages/Profile.jsx'
import ForgotPassword from '../Pages/Forgotpass.jsx'
import Navbar from '../Pages/Test.jsx'
import Actors from '../Pages/Actors.jsx'
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
        <Route path="/filmdetails/:filmId" element={<FilmDetails />} />
        <Route path="/actors/:actor" element={<Actors />} />
        <Route path="/seriesdetails" element={<SerieDetails />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
