import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext(null);

const API = import.meta.env.VITE_API_URL;

axios.defaults.withCredentials = true;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${API}/api/auth/profile`);
      setUser(res.data); // FIXED
    } catch (err) {
      setUser(null);
    }
  };

  const login = async (regno, dob) => {
    try {
      setLoading(true);
      await axios.post(`${API}/api/auth/login`, { regno, dob });
      await fetchUser();
      return true;
    } catch (err) {
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await axios.get(`${API}/api/auth/logout`);
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, fetchUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
