
import './App.css';
import Navbar from './components/HomePage/Navbar';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/HomePage/Banner';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Banner></Banner>} ></Route>
        <Route path='/home' element={<Banner></Banner>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
