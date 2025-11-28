import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';

import ProtectedRoute from '../utils/ProtectedRoutes';
import AdminLogin from './Components/AdminLogin';
import AdminDashboard from './Components/AdminDashboard';
import Hallticket from './Components/Hallticket';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route
        path="/hallticket"
        element={
          <ProtectedRoute>
            <Hallticket />
          </ProtectedRoute>
        }
      />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
