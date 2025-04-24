import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from '../components/navbar/Navbar.jsx';
import Home from '../pages/Home/Home.jsx';
import Auth from '../pages/auth/Auth.jsx';
import Login from '../pages/auth/Login.jsx';
import Register from '../pages/auth/Register.jsx';
import Error from '../pages/error/Error.jsx';
import Footer from '../components/footer/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from '../utils/Protected.Route.jsx';
function MainLayout() {
  return (
    <BrowserRouter>
      {/* navbar */}
      <Navbar />
      <Routes>
        <Route
          path="protected_pages"
          element={
            // we can use authChekc for payment user credentials and cart management
            <ProtectedRoute>
              {/* <Home /> */}
            </ProtectedRoute>
          }
        />
            <Route path='/' element={ <Home />} />
            <Route path="auth" element={<Auth />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
    

        {/* not found pages */}
        <Route path="*" element={<Error />} />
      </Routes>

      {/* footer component  */}
      <Footer />

      <ToastContainer />
    </BrowserRouter>
  );
}

export default MainLayout;
