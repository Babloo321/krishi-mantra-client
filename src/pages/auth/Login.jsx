import { MoveRight } from 'lucide-react';
import React, { useState } from 'react';
import { useGoogleLogin  } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth.js';
import { toast } from 'react-toastify';
import { AxiosPublic } from '../../api/axiosInstance.js';
import useProducts from '../../hooks/useProduct.js';
import useCart from '../../hooks/useCart.js';
const Login = () => {
    const { setCart } = useCart();
    const { login } = useAuth();
    const { refetch } = useProducts();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      userName: '',
      password: '',
    });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandle = async(e) => {
    e.preventDefault();
    try {
      const response = await AxiosPublic.post(
        '/user/login',
        formData,
        {withCredentials:true}
      );
      const data =await response.data.data;
      const { userObj, accessToken, refreshToken } = await data;
      if(response.status == "200"){
        const logingData = {
          user:userObj,
          accessToken:accessToken,
          refreshToken:refreshToken
        }
        login(logingData);
        setCart();
        if(refetch) refetch();
        toast.success("Successfully Login")
       navigate("/")
      }
      } catch (error) {
        if(error.status === 404 || error.status >= 400 && error.status < 500){
          toast.error("You are not authorized");
          navigate("/signup");
        }
    }
  };

  const handleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        const googleUser = await res.json();
        const response = await AxiosPublic.post(
          '/user/google-auth',
          {
            email: googleUser.email,
            name: googleUser.name,
            picture: googleUser.picture,
          },
          {withCredentials:true}
        );
      
        const { accessToken, refreshToken, user } = response.data.data;
        if(user && accessToken){
          const logingData = {
            user:user,
            accessToken:accessToken,
            refreshToken:refreshToken
          }
          login(logingData);
          toast.success("Successfully Login")
          setTimeout(() => {
            navigate("/");
            window.close();
          },1000);
  
        }
      } catch (error) {
        toast.error(error.message)
        navigate("/login");
      }
    },
    onError: () => {
      toast.error("Goolge Login-In Failed");
    },
  });
  return (
    <div className="md:py-42 mx-auto pt-22">
      <div className="max-w-[450px] w-full min-h-[382px] p-[31px] mx-auto flex items-center justify-center flex-col rounded-lg border-[1px] border-[#9a9caa]">
        
        <h3 className="text-3xl text-[#272343] font-semibold font-inter mb-5 capitalize">
          Login{' '}
        </h3>

        <form
          action="#"
          onSubmit={submitHandle}
          className="flex flex-col items-center w-full space-y-4"
        >
          <input
            type="text"
            name="userName" // ✅ lowercase to match formData key
            value={formData.userName}
            onChange={handleChange}
            placeholder="Your userName..."
            required
            className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5"
          />
          <input
           type="password"
           placeholder='Your password...'
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5"
          />
          <button
            type="submit"
            className="w-full h-[50px] bg-[#007580] rounded-lg pl-3.5 text-base text-white font-semibold font-inter capitalize flex items-center justify-center cursor-pointer gap-2.5"
          >
            Login <MoveRight />
          </button>
        </form>

        <p className="text-base text-[#272343] font-normal font-inter flex items-center justify-center gap-2.5 mt-4">
          Don't have account{' '}
          <Link to={'/register'} className="text-[#007580]">
            Register
          </Link>
        </p>

        <button
      onClick={() => handleLogin()}
      className="w-full bg-black text-gray-200 hover:bg-gray-200 hover:text-black border border-gray-300 rounded-full py-2 px-4 shadow hover:shadow-lg flex items-center justify-center gap-3 transition-all duration-300 hover:cursor-pointer mt-2"
    >
      <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google"
        className="w-5 h-5"
      />
      <span className="font-medium">Login up with Google</span>
    </button>

      </div>
      
    </div>
  );
};

export default Login;
