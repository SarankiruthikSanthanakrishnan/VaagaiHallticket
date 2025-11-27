import React from 'react';
import '../../A4.css'; // A4 size + ATM005 font

const Page2 = ({ user }) => {
  return (
    <div id="page-2" className="page">
      <div className="card" id="main">
        <div className="card-body">
          {/* Header */}
          <div className="card">
            <div
              className="card-body"
              style={{ display: 'flex', justifyContent: 'flex-start' }}
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

          {/* Title Bar */}
          <div
            className="text-light text-center p-2"
            style={{ backgroundColor: 'rgb(4, 23, 80)' }}
          >
            <h5 className="fw-bold">
              படிவம் 02 – மதிப்பீட்டுப் பெறுகைப் படிவம்
            </h5>
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
                    4. மாணவர் பெயர் (தமிழில்)
                    <br />
                    (ஆங்கிலத்தில்)
                  </td>
                  <td>
                    : {user.name_tamil}
                    <br />: {user.name_english}
                  </td>
                </tr>

                {/* Box for Page Count */}
                <tr>
                  <td>5. மொத்தம் எழுதிய பக்கங்களின் எண்ணிக்கை</td>
                  <td>
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        border: '2px solid black',
                      }}
                    ></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Office Use Section */}
          <div className="card mt-3">
            <div className="card-body">
              <p className="text-center">
                <u>மதிப்பீட்டாளர் பயன்பாட்டிற்கு மட்டும்</u>
              </p>

              <table className="w-100">
                <tbody>
                  <tr>
                    <td>1. தற்காலிகப் பதிவுஎண்</td>
                    <td>:</td>
                  </tr>
                  <tr>
                    <td>2. மொத்தம் எழுதப்பட்ட பக்கங்கள்</td>
                    <td>:</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card-body">
              <p className="text-center">
                <u>மதிப்பெண் பட்டியல்</u>
              </p>

              <table
                className="table table-bordered"
                style={{ tableLayout: 'fixed' }}
              >
                <tbody>
                  <tr>
                    <td className="text-center" style={{ fontSize: 'small' }}>
                      வினா எண்
                    </td>
                    {[1, 2, 3, 4, 5, 6, 7].map(q => (
                      <td
                        key={q}
                        className="text-center"
                        style={{ fontSize: 'small' }}
                      >
                        {q}
                      </td>
                    ))}
                    <td className="text-center" style={{ fontSize: 'small' }}>
                      மொத்தம் (100)
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center">மதிப்பெண்</td>
                    {[...Array(8)].map((_, i) => (
                      <td key={i} style={{ height: '25px' }}></td>
                    ))}
                  </tr>
                </tbody>
              </table>

              <p>
                ஏதேனும் முறைகேடு / சேதங்கள் / பிழைகள் இருப்பின் குறிப்பிடவும்.
              </p>

              <div className="row">
                <div className="col text-end">
                  மதிப்பீட்டாளர் கையொப்பம் தேதியுடன்
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>

            {/* Office Section 2 */}
            <p className="text-center mt-3">
              <u>அலுவலகப்பயன்பாட்டிற்கு மட்டும்</u>
            </p>

            <table className="w-100" style={{ margin: '10px' }}>
              <tbody>
                <tr>
                  <td>மதிப்பீடு செய்யப்பட்ட விடைத்தாள் கிடைக்கப்பெற்ற நாள்</td>
                  <td>:</td>
                </tr>
                <tr>
                  <td>ஏதேனும் முறைகேடு / சேதங்கள் / பிழைகள்</td>
                  <td>: ஆம் / இல்லை</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer Signatures */}
          <div className="row mt-5">
            <div className="col-6 text-center">பொறுப்பாளர்</div>
            <div className="col-6 text-center">தலைவர் / தலைமைப் புரவலர்</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
