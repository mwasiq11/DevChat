import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

// Get the API URL from environment variable
let API_BASE_URL = import.meta.env.VITE_API_URL;

// If VITE_API_URL is not set, use relative path for local development
if (!API_BASE_URL) {
  API_BASE_URL = '/api';
} else {
  // Ensure the URL doesn't have a trailing slash
  API_BASE_URL = API_BASE_URL.replace(/\/+$/, '');
  
  // Ensure it ends with /api
  if (!API_BASE_URL.endsWith('/api')) {
    API_BASE_URL = API_BASE_URL + '/api';
  }
}

// Log API base URL (always, to help debug production issues)
console.log('[Axios Config] API Base URL:', API_BASE_URL);

const axiosInstance = axios.create({
	baseURL: API_BASE_URL,
	withCredentials: true,
});

// Store the getToken function to be set by the app
let getAuthToken = null;

export const setAuthTokenGetter = (getter) => {
  getAuthToken = getter;
};

// Add request interceptor for authentication and debugging
axiosInstance.interceptors.request.use(
  async (config) => {
    // Add Clerk auth token if available
    if (getAuthToken) {
      try {
        const token = await getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        console.error('[Auth Token Error]', error);
      }
    }
    
    return config;
  },
  (error) => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error logging
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API Response Error]', {
      message: error.message,
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data
    });
    return Promise.reject(error);
  }
);

export default axiosInstance;