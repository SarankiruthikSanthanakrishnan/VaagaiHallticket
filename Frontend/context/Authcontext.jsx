import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  axios.defaults.withCredentials = true;

  // -------- GET LOGGED-IN USER DETAILS --------
  const fetchUser = async () => {
    try {
      const res = await axios.get('http://localhost:3100/api/auth/profile');

      setUser(res.data); // contains full student details
    } catch (err) {
      setUser(null);
    }
  };

  // --------------- LOGIN -------------------
  const login = async (regno, dob) => {
    try {
      setLoading(true);

      const res = await axios.post('http://localhost:3100/api/auth/login', {
        regno,
        dob,
      });
      await fetchUser();
      return true;
    } catch (err) {
      return false;
    } finally {
      setLoading(false);
    }
  };

  // --------------- LOGOUT -------------------
  const logout = async () => {
    await axios.get('http://localhost:3100/api/auth/logout');
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

// export custom hook
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
