import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth.js";
import { toast } from "react-toastify";
import useAxiosPrivate from "../hooks/useAxiosPrivate.js";
import useProducts from '../hooks/useProduct.js';
import useCart from "../hooks/useCart.js";
const CheckAuthProvider = ({ children }) => {
  const { setCart } = useCart();
  const { refetch } = useProducts();
  const AxiosPrivate = useAxiosPrivate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(true); // 👈 Add this
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const res = await AxiosPrivate.post("/user/refresh-token")
        const { user, accessToken, refreshToken } = res.data.data;
        if (user && accessToken) {
          // console.log("User data: ",user);
          login({ user, accessToken, refreshToken });
          setCart();
          if (refetch) refetch(); 
        }
      } catch (error) {
        toast.error("You are not logged in", error.message)
      } finally {
        setLoading(false); // ✅ Always stop loading
      }
    };

    checkLoggedIn();
  }, []);

  if (loading) return <div
  className="text-center text-pink-600 bg-blue-400 p-4"
  >Loading...</div>; // 👈 Show loader until auth check finishes

  return children;
};

export default CheckAuthProvider;
