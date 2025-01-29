import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import A from './A';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<A />} />
      </Routes>
    </Router>
  );
}

export default App;
