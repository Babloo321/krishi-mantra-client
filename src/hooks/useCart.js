import { useDispatch, useSelector } from "react-redux";
import {
  setCart,
  clearCart,
} from "../rtk/cart.slice.js";
import useAxiosPrivate from "./useAxiosPrivate.js";

const useCart = () => {
  const dispatch = useDispatch();
  const AxiosPrivate = useAxiosPrivate();

  const products = useSelector((state) => state.cart.products);
  const totalItems = useSelector((state) => state.cart.totalItems);

  // ✅ Fetch all cart items from server
  const handleSetCart = async () => {
    try {
      const res = await AxiosPrivate.get("/cart/getAllCart");
      const { products, items } = res.data.data;

      dispatch(setCart({ items, products: products || [] }));
    } catch (error) {
      console.log("Error in setCart:", error);
    }
  };

  // ✅ Add product to cart (server + redux)
  const handleAddToCart = async (productId) => {
    try {
      const res = await AxiosPrivate.post(`/cart/addToCart/${productId}`);
      const cart = res.data.data;

      // Option 1: Re-fetch full cart after adding (recommended for sync)
      dispatch(setCart({ items: cart.items, products: cart.products }));

      // Option 2: OR just update redux manually (less accurate)
      // dispatch(addToCart({ productId, product: productData }));

    } catch (error) {
      console.log("Error in addToCart:", error);
    }
  };

  // ✅ Remove product from cart (server + redux)
  const handleRemoveFromCart = async (productId) => {
    try {
      const res = await AxiosPrivate.delete(`/cart/removeToCart/${productId}`);
      const cart = res.data.data;

      dispatch(setCart({ items: cart.items, products: cart.products }));
    } catch (error) {
      console.log("Error in removeFromCart:", error);
    }
  };

  // ✅ Clear cart (frontend only)
  const handleClearCart = () => {
    dispatch(clearCart());
    // Optional: send a clear request to server if needed
  };

  return {
    products,
    totalItems,
    setCart: handleSetCart,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    clearCart: handleClearCart,
  };
};

export default useCart;
