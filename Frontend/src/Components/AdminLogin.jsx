import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [alertMsg, setAlertMsg] = useState('');
  const [alertType, setAlertType] = useState(''); // success or danger

  const navigate = useNavigate();

  const showAlert = (msg, type) => {
    setAlertMsg(msg);
    setAlertType(type);

    setTimeout(() => {
      setAlertMsg('');
      setAlertType('');
    }, 3000);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post(
        'http://localhost:3100/api/auth/admin/login',
        { username, password },
        { withCredentials: true }
      );

      showAlert('Admin Login Successful!', 'success');

      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 1000);
    } catch (err) {
      showAlert('Invalid Admin Credentials!', 'danger');
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Noto Sans Tamil, sans-serif',
        background: 'linear-gradient(to right, #fdfbfb, #ebedee)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="container">
        {/* Alert Box */}
        {alertMsg && (
          <div className={`alert alert-${alertType} text-center`} role="alert">
            {alertMsg}
          </div>
        )}

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div
              className="card p-4"
              style={{
                borderRadius: '15px',
                boxShadow: '0 0 15px rgba(0,0,0,0.1)',
              }}
            >
              <div className="text-center">
                <img src="vts logo.png" style={{ width: '80px' }} alt="logo" />
                <h2 className="text-danger fw-bold">அட்மின் உள்நுழைவு</h2>
                <p className="text-muted">Admin Control Panel</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">பயனாளர் பெயர்</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    autoComplete="username"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">கடவுச்சொல்</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                  />
                </div>

                <button
                  className="btn w-100"
                  style={{ backgroundColor: '#d63384', color: '#fff' }}
                >
                  உள்நுழைக
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
