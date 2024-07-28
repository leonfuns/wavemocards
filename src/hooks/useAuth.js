import { useContext, useCallback } from 'react';
import { AuthContext } from '../context/AuthContext';
// import api from '../services/api';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { user, loading, setUser, token, setToken } = context;

  const login = useCallback(async (email, password) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();

      localStorage.setItem('userToken', token);
      console.log('User token:', token);
      console.log('User:', user);

      // 發送 token 到後端，後端將設置 HTTP-only cookie
      // await api.post('/api/set-token', { token });

      setUser(user);
      setToken(token);
      return user;
    } catch (error) {
      console.error('Login error:', error);
      let errorMessage = '登錄失敗，請檢查您的電子郵件和密碼。';
      if (error.code === 'auth/user-not-found') {
        errorMessage = '找不到該用戶，請檢查您的電子郵件地址。';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = '密碼錯誤，請重試。';
      } else if (error.code === 'auth/invalid-credential') {
        errorMessage = '無效的憑證，請檢查您的電子郵件和密碼。';
      }
      throw new Error(errorMessage);
    }
  }, [setUser, setToken]);

  const logout = useCallback(async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      localStorage.removeItem('userToken');
      // await api.post('/api/clear-token');
      setUser(null);
      setToken(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }, [setUser, setToken]);

  // const refreshToken = useCallback(async () => {
  //   try {
  //     // const response = await api.post('/api/refresh-token');
  //     const newToken = response.data.token;
  //     localStorage.setItem('userToken', newToken);
  //     setToken(newToken);
  //     return newToken;
  //   } catch (error) {
  //     console.error('Token refresh error:', error);
  //     throw error;
  //   }
  // }, [setToken]);

  return {
    user,
    loading,
    token,
    login,
    logout,
    // refreshToken,
    isAuthenticated: !!user,
  };
};