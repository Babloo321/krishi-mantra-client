import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainLayout from './mainLayout/MainLayout';

import { store } from './rtk/store.js';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
import CheckAuthProvider from './utils/AuthProvider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <Provider store={store}>
      <CheckAuthProvider>
        <MainLayout />
        </CheckAuthProvider>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);
