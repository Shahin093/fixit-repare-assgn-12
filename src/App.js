
import './App.css';
import Navbar from './components/HomePage/Navbar';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/HomePage/Banner';
import Home from './components/Home';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
