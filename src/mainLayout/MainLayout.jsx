import { BrowserRouter, Route, Routes } from 'react-router-dom'; // ✅ Make sure you're using 'react-router-dom'
import Navbar from '../components/navbar/Navbar.jsx';
import Home from '../pages/Home/Home.jsx';
import Auth from '../pages/auth/Auth.jsx';
import Login from '../pages/auth/Login.jsx';
import Register from '../pages/auth/Register.jsx';
import Error from '../pages/error/Error.jsx';
import Footer from '../components/footer/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from '../utils/Protected.Route.jsx';
import Shop from '../pages/shop/Shop.jsx';
import About from '../pages/about/About.jsx';
import MobileAccount from '../components/account/MobileAccount.jsx';
import ProductDetails from '../components/productDetails.jsx/ProductDetails.jsx';
import Cart from '../pages/cart/Cart.jsx';
function MainLayout() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/mobile-account" element={<MobileAccount />} />
          <Route path="/product-details" element={<ProductDetails />} />

          {/* Protected Route */}
          <Route
            path="/view-all-carts"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          {/* Not Found */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
  );
}

export default MainLayout;
