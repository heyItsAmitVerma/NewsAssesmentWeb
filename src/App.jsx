import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/category/:category" element={<News />} />
          <Route path="/" element={<News />} />
        </Routes>
    
      </div>
    </Router>
  );
}

export default App;


