import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About'; 

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/about' element= {<About />} />
      </Routes>
      </Router>
      </>
  );
}

export default App
