import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './global.css'; // Import global CSS
import { Header, Footer } from './components';
import { Home, About, Skills, Courses, Achievements, Contact } from './pages';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/#home' />} />
          <Route path='/about' element={<Navigate to='/#about' />} />
          <Route path='/skills' element={<Navigate to='/#skills' />} />
          <Route path='/courses' element={<Navigate to='/#courses' />} />
          <Route path='/achievements' element={<Navigate to='/#achievements' />} />
          <Route path='/contact' element={<Navigate to='/#contact' />} />
        </Routes>
        <div id='home'>
          <Home />
        </div>
        <div id='about'>
          <About />
        </div>
        <div id='skills'>
          <Skills />
        </div>
        <div id='courses'>
          <Courses />
        </div>
        <div id='achievements'>
          <Achievements />
        </div>
        <div id='contact'>
          <Contact />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;