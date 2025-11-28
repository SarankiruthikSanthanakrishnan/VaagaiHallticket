import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Authcontext';
import '../App.css';

function Login() {
  const [register_number, setRegisterNumber] = useState('');
  const [dob, setDob] = useState('');
  const { login, loading, user } = useAuth();
  const navigate = useNavigate();

  const [alertMsg, setAlertMsg] = useState('');
  const [alertType, setAlertType] = useState(''); // success or danger

  const showAlert = (msg, type) => {
    setAlertMsg(msg);
    setAlertType(type);

    setTimeout(() => {
      setAlertMsg('');
      setAlertType('');
    }, 3000);
  };

  useEffect(() => {
    if (user) {
      navigate('/hallticket');
    }
  }, [user]);

  const handleSubmit = async e => {
    e.preventDefault();

    const ok = await login(register_number.trim(), dob);

    if (ok) {
      showAlert('உள்நுழைவு வெற்றிகரமாக முடிந்தது!', 'success');
      navigate('/hallticket');
    } else {
      showAlert(
        'உள்நுழைவு தோல்வி! பதிவு எண் அல்லது பிறந்த தேதி தவறு.',
        'danger'
      );
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
        {/* Bootstrap Alerts */}
        {alertMsg && (
          <div className={`alert alert-${alertType} text-center`} role="alert">
            {alertMsg}
          </div>
        )}

        {loading && (
          <div className="text-center">
            <div className="spinner-border text-danger" role="status"></div>
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
                <h2 className="text-danger fw-bold">வாகை தமிழ்ச்சங்கம்</h2>
                <p className="text-muted">பாடத்திட்டம் & மதிப்பீட்டு குழு</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">பதிவு எண்</label>
                  <input
                    type="text"
                    className="form-control"
                    value={register_number}
                    onChange={e => setRegisterNumber(e.target.value)}
                    required
                    autoComplete="username"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">பிறந்த தேதி</label>
                  <input
                    type="date"
                    className="form-control"
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                    required
                    autoComplete="bday-day"
                  />
                </div>

                <button
                  disabled={loading}
                  className="btn btn-primary w-100"
                  style={{ backgroundColor: '#d63384' }}
                >
                  {loading ? 'சரிபார்க்கிறது...' : 'உள்நுழைக'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
