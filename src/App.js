import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Home />
      </Router>
    </div>
  );
}

export default App;
