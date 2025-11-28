import React from 'react';
import '../../A4.css';

const Page1 = ({ user }) => {
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
    <div id="page-1" className="page">
      <div className="card" id="main">
        <div className="card-body">
          {/* Header */}
          <div className="card">
            <div
              className="card-body"
              style={{
                display: 'flex',
                justifyContent: 'center',
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

            {/* Title Bar */}
            <div
              className="text-light text-center p-2"
              style={{ backgroundColor: 'rgb(4, 23, 80)' }}
            >
              <h5 className="fw-bold">படிவம் 01 - தரவுப்பட்டியல் படிவம்</h5>
            </div>

            {/* Student Details */}
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
                      4. மாணவர் பெயர் (தமிழில்) <br />
                      (ஆங்கிலத்தில்)
                    </td>
                    <td>
                      : {user.name_tamil} <br />: {user.name_english}
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

                  <tr>
                    <td>7. இணைக்கப்பட்ட படிவங்கள் [✓] குறியிடவும்.</td>
                  </tr>
                </tbody>
              </table>

              {/* Forms Table */}
              <table
                className="table table-bordered mt-2"
                style={{ tableLayout: 'fixed' }}
              >
                <tbody>
                  <tr>
                    {[
                      'படிவம் 01',
                      'படிவம் 02',
                      'படிவம் 03',
                      'படிவம் 3A',
                      'படிவம் 04',
                      'படிவம் 05',
                      'படிவம் 06',
                    ].map((f, i) => (
                      <td
                        key={i}
                        className="text-center"
                        style={{ fontSize: 'small' }}
                      >
                        {f}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    {Array(7)
                      .fill('')
                      .map((_, i) => (
                        <td key={i} style={{ height: '25px' }}></td>
                      ))}
                  </tr>
                </tbody>
              </table>

              {/* Declaration */}
              <p style={{ fontSize: 'small', textAlign: 'justify' }}>
                8. மேற்கூறிய அனைத்து தகவல்களும் சரியே. வாகை தமிழ்ச்சங்கத்தின்
                பாடத்திட்டம் , மதிப்பீடு மற்றும் கல்வியாலோசனைக் குழுவின்
                இணையவழிக்கல்வி விதிகள் மற்றும் செயல்பாடுகள் ஆகியவற்றைப்
                புரிந்துகொண்டு அதன் வழி தேர்வெழுதினேன் என உறுதியளிக்கிறேன்.
              </p>

              {/* Sign Section */}
              <div className="row mt-5">
                <div className="col">
                  தேதி: {new Date().toLocaleDateString('en-GB')}
                </div>

                <div className="col text-end">
                  தேர்வரின் கையொப்பம் <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>

          {/* Office Use Section */}
          <div className="card mt-3">
            <div className="card-body">
              <p className="text-center">
                <u>அலுவலகப்பயன்பாட்டிற்கு மட்டும்</u>
              </p>

              <table className="w-100">
                <tbody>
                  <tr>
                    <td>விடைத்தாள் கிடைக்கப்பெற்ற நாள்</td>
                    <td>:</td>
                  </tr>
                  <tr>
                    <td>முறைகேடு / பிழைகள்</td>
                    <td>: ஆம் / இல்லை</td>
                  </tr>
                </tbody>
              </table>

              <br />

              <div className="d-flex justify-content-center">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <table
                          className="table table-bordered text-center"
                          style={{ width: '95%' }}
                        >
                          <thead>
                            <tr>
                              <th>தற்காலிக பதிவுஎண்</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ height: '30px' }}></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>

                      <td>
                        <table
                          className="table table-bordered text-center"
                          style={{ width: '95%' }}
                        >
                          <thead>
                            <tr>
                              <th>மதிப்பெண்கள் (100)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ height: '30px' }}></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />

              <div className="row">
                <div className="col-6 text-center">பொறுப்பாளர்</div>
                <div className="col-6 text-center">
                  தலைவர் / தலைமைப் புரவலர்
                </div>
              </div>

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
