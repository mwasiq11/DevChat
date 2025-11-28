import axios from "axios";

// Ensure API_BASE_URL always ends with /api
let API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

// If VITE_API_URL is provided but doesn't end with /api, append it
if (API_BASE_URL && !API_BASE_URL.endsWith('/api')) {
  // Remove trailing slash if present, then add /api
  API_BASE_URL = API_BASE_URL.replace(/\/$/, '') + '/api';
}

const axiosInstance = axios.create({
	baseURL: API_BASE_URL,
	withCredentials: false,
});

export default axiosInstance;