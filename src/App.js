import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import  NaviBar  from './components/Navibar.jsx';
import User from './components/User';



function App() {
  return (
  
    <div className="App">
      <BrowserRouter>
        <NaviBar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/users' element={<User />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
      
  );
}

export default App;
