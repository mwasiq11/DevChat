import axios from "axios";

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
	withCredentials: false,
});

// Add request interceptor for debugging
axiosInstance.interceptors.request.use(
  (config) => {
    const fullUrl = (config.baseURL || '') + (config.url || '');
    console.log(`[API Request] ${config.method?.toUpperCase()} ${fullUrl}`);
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
      baseURL: error.config?.baseURL,
      fullURL: (error.config?.baseURL || '') + (error.config?.url || ''),
      status: error.response?.status,
      data: error.response?.data
    });
    return Promise.reject(error);
  }
);

export default axiosInstance;