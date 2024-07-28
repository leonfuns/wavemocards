import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-base-url.com',
  withCredentials: true, // 允許跨域請求攜帶 cookies
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // 調用刷新 token 的 API
        await api.post('/api/refresh-token');
        // 重試原始請求
        return api(originalRequest);
      } catch (refreshError) {
        // 刷新失敗，可能需要重新登錄
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;