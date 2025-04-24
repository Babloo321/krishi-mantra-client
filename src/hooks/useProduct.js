// src/hooks/useProducts.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AxiosPublic} from '../api/axiosInstance.js' // your custom axios hook
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from '../rtk/product.slice.js';

const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const fetchProducts = async () => {
    dispatch(fetchProductsStart());
    try {
      const response = await AxiosPublic.get('/product/getProducts',{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      });
      dispatch(fetchProductsSuccess(response.data.data));
    } catch (err) {
      dispatch(fetchProductsFailure(err.message || 'Failed to fetch products'));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, refetch: fetchProducts };
};

export default useProducts;
