
import './App.css';
import Navbar from './components/HomePage/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import Footer from './components/shared/Footer';
import DashBoard from './components/dashboard/DashBoard';
import ServicePurchase from './components/services/ServicePurchase';
import MyOrders from './components/dashboard/MyOrders';
import User from './components/dashboard/User';
import MyProfile from './components/dashboard/MyProfile';
import RequiredAuth from './components/login/RequriedAuth';
import RequiredAdmin from './components/login/RequiredAdmin';
import ManageProduct from './components/dashboard/ManageProduct';
import AddProduct from './components/dashboard/AddProduct';
import ManageAllOrder from './components/dashboard/ManageAllOrder';
import Payment from './components/dashboard/Payment';
import AddRating from './components/dashboard/AddRating';
import Reviews from './components/HomePage/Reviews';
import NotFound from './components/HomePage/NotFound';
import Blogs from './components/HomePage/Blogs';
import MyProtpolio from './components/HomePage/MyProtpolio';


// https://fixit-fsa6.onrender.com/

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <Home></Home>
        } ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/protpolio' element={<MyProtpolio></MyProtpolio>} ></Route>
        <Route path='/blog' element={<Blogs></Blogs>} ></Route>
        <Route path='/review' element={

          <RequiredAuth>
            <Reviews></Reviews>
          </RequiredAuth>
        } ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        <Route path='/servicePurchase/:id' element={
          <RequiredAuth>
            <ServicePurchase></ServicePurchase>
          </RequiredAuth>}></Route>

        <Route
          path='dashboard'
          element={
            <RequiredAuth>
              <DashBoard></DashBoard>
            </RequiredAuth>
          }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/order' element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/review' element={<AddRating></AddRating>}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
          <Route path='/dashboard/users' element={
            <RequiredAdmin>
              <User></User>
            </RequiredAdmin>

          }></Route>
          <Route path='/dashboard/manageProduct' element={
            <RequiredAdmin>
              <ManageProduct></ManageProduct>
            </RequiredAdmin>
          }></Route>

          <Route path='/dashboard/addProduct' element={
            <RequiredAdmin>
              <AddProduct></AddProduct>
            </RequiredAdmin>
          }></Route>

          <Route path='/dashboard/manageAllOrder' element={
            <RequiredAdmin>
              <ManageAllOrder></ManageAllOrder>
            </RequiredAdmin>
          }></Route>

          {/* <Route path='review' element={<Review></Review>}></Route>  */}
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
