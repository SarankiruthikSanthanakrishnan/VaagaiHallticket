import React from 'react';
import '../../A4.css';

const Page5 = ({ user }) => {
  const formatDOB = dob => {
    if (!dob) return ''; // null or empty protection
    const d = new Date(dob);
    if (isNaN(d)) return ''; // invalid date protection

    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div id="page-5" className="page">
      <div className="card" id="main">
        <div className="card-body">
          {/* Header */}
          <div className="card">
            <div
              className="card-body"
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <div className="row w-100">
                <div className="col-6">
                  <img
                    src="/vts logo.png"
                    alt="Logo"
                    className="w-50 img-fluid"
                  />
                </div>

                <div className="col-6 d-flex justify-content-center align-items-center bg-light">
                  <div className="text-center">
                    <h2 className="text-danger fw-bold">வாகை தமிழ்ச்சங்கம்</h2>
                    <p>
                      அத்தனூர் வடக்கு, அத்தனூர், நாமக்கல், தமிழ்நாடு – 636301{' '}
                      <br />
                      vaagaitamilsangam@gmail.com <br />
                      பாடத்திட்டம், மதிப்பீடு மற்றும் கல்வி ஆலோசனைக்குழு -
                      இறுதித்தேர்வு 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div
            className="text-light text-center p-2"
            style={{ backgroundColor: 'rgb(4, 23, 80)' }}
          >
            <h5 className="fw-bold">படிவம் 04 - பின்னூட்டப்படிவம்</h5>
          </div>

          {/* Student Info Table */}
          <div style={{ margin: '10px' }}>
            <table className="w-100">
              <tbody>
                <tr>
                  <td>1. வகுப்புக் குறியீடு & பெயர்</td>
                  <td>
                    : {user.course_code} / {user.course_name}
                  </td>
                </tr>

                <tr>
                  <td>2. விண்ணப்ப எண்</td>
                  <td>: {user.app_no}</td>
                </tr>

                <tr>
                  <td>3. வகுப்புப் பதிவு எண்</td>
                  <td>: {user.register_number}</td>
                </tr>

                <tr>
                  <td>
                    4. மாணவர் பெயர் (தமிழில்)
                    <br />
                    (ஆங்கிலத்தில்)
                  </td>
                  <td>
                    : {user.name_tamil}
                    <br />: {user.name_english}
                  </td>
                </tr>

                <tr>
                  <td>5. பிறந்த தேதி</td>
                  <td>: {formatDOB(user.dob)}</td>
                </tr>

                <tr>
                  <td>6. அலைபேசி எண்</td>
                  <td>: {user.phone_no}</td>
                </tr>
              </tbody>
            </table>

            {/* Feedback Section 1 */}
            <br />
            <p style={{ fontWeight: 'bold' }}>
              தெரிந்துகொண்டவை / சிறந்த முறையில் அமைந்தவை / நேர்மறைக் கருத்துகள்
            </p>

            <div
              style={{
                width: '100%',
                height: '235px',
                border: '2px solid black',
                backgroundColor: '#fff',
              }}
            ></div>

            {/* Feedback Section 2 */}
            <br />
            <p style={{ fontWeight: 'bold' }}>
              மாற்றிக்கொள்ளவேண்டிய (அ) மேம்படுத்தவேண்டிய கூறுகள் / எதிர்மறைக்
              கருத்துகள்
            </p>

            <div
              style={{
                width: '100%',
                height: '235px',
                border: '2px solid black',
                backgroundColor: '#fff',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
