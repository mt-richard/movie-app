
import './App.css';
import Home from './Pages/home';
import Footer from './component/footer';
import Header from './component/header';
import React, { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="">
      <Header />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
