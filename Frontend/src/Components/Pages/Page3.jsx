import React from 'react';
import '../../A4.css';

const Page3 = ({ user }) => {
  return (
    <div id="page-3" className="page">
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

          {/* Title */}
          <div
            className="text-light text-center p-2"
            style={{ backgroundColor: 'rgb(4, 23, 80)' }}
          >
            <h5 className="fw-bold">
              படிவம் 03 - விவரங்கள் சரிபார்ப்பு மற்றும் உறுதிமொழிப் படிவம்
            </h5>
          </div>

          {/* Details + Photo */}
          <div
            className="d-flex justify-content-center"
            style={{ margin: '10px' }}
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    {/* Student details */}
                    <table style={{ width: '100%', tableLayout: 'fixed' }}>
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
                          <td>
                            :{' '}
                            {new Date(user.dob)
                              .toISOString()
                              .split('T')[0]
                              .split('-')
                              .reverse()
                              .join('-')}
                          </td>
                        </tr>

                        <tr>
                          <td>6. அலைபேசி எண்</td>
                          <td>: {user.phone_no}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  {/* Photo Box */}
                  <td style={{ paddingLeft: '20px' }}>
                    <div
                      style={{
                        width: '138px',
                        height: '177px',
                        border: '1px solid #000',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '10px',
                        fontSize: '14px',
                      }}
                    >
                      சமீபத்திய
                      <br />
                      கடவுச்சீட்டு அளவிலான
                      <br />
                      புகைப்படத்தை
                      <br />
                      இங்கு ஒட்டவும்
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Marks Table */}
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
                    வகுப்புக் குறியீடு
                  </td>
                  <td className="text-center" style={{ fontSize: 'small' }}>
                    பாடம்
                  </td>
                  <td className="text-center" style={{ fontSize: 'small' }}>
                    தேர்வெழுதிய நாள் (DD/MM/YYYY)
                  </td>
                </tr>

                <tr>
                  <td style={{ height: '25px' }}></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td
                    colSpan={2}
                    className="text-center"
                    style={{ fontSize: 'small' }}
                  >
                    மொத்தம் எழுதிய பக்கங்களின் எண்ணிக்கை
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            {/* Declaration */}
            <p style={{ textAlign: 'justify' }}>
              மேற்கூறிய அனைத்து தகவல்களும் சரியே. மேலுள்ள தகவல்களைப் பொறுத்தே
              சான்றிதழ் கிடைக்கப்பெறும் என்பதையும் அறிவேன். வாகை
              தமிழ்ச்சங்கத்தின் பாடத்திட்டம், மதிப்பீடு மற்றும்
              கல்வியாலோசனைக்குழுவின் இணையவழிக்கல்வி விதிகள் மற்றும் செயல்பாடுகள்
              ஆகியவற்றைப் புரிந்துகொண்டு அதன் வழி தேர்வெழுதினேன் என
              உறுதியளிக்கிறேன். மேலும் இத்துடன் எனது ஆதார் நகலை இணைத்துள்ளேன்.
            </p>

            <table>
              <tbody>
                <tr>
                  <td>
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        border: '1px solid black',
                      }}
                    ></div>
                  </td>
                  <td>&nbsp;உறுதியளிக்கிறேன் [✓ குறியிடவும்]</td>
                </tr>
              </tbody>
            </table>

            <br />
            <br />
            <br />

            <table>
              <tbody>
                <tr>
                  <td>தேதி : {new Date().toLocaleDateString('en-GB')}</td>
                </tr>
                <tr>
                  <td>இடம் :</td>
                </tr>
              </tbody>
            </table>

            <br />

            <div className="row">
              <div className="col fw-bold">இணைப்பு : ஆதார் ஆவண நகல்</div>
              <div className="col text-end">
                தேர்வரின் கையொப்பம்
                <br />
                <br />
              </div>
            </div>

            <br />

            <div className="row">
              <div className="col-6 text-center">பொறுப்பாளர்</div>
              <div className="col-6 text-center">தலைவர் / தலைமைப் புரவலர்</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
