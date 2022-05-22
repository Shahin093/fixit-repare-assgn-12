
import './App.css';
import Navbar from './components/HomePage/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
