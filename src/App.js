
import './App.css';
import Navbar from './components/HomePage/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import Footer from './components/shared/Footer';
import DashBoard from './components/dashboard/DashBoard';
import ServicePurchase from './components/services/ServicePurchase';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        <Route path='/servicePurchase/:id' element={<ServicePurchase></ServicePurchase>}></Route>

        <Route
          path='dashboard'
          element={
            <DashBoard></DashBoard>
          }>

          {/* <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<Review></Review>}></Route> */}
        </Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
