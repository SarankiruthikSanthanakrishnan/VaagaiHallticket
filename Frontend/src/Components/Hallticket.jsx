import React from 'react';
import Page1 from './Pages/Page1';
import { useAuth } from '../../context/Authcontext';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';
import Page6 from './Pages/Page6';
import Page7 from './Pages/Page7';

const Hallticket = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <Page1 user={user} />
      <Page2 user={user} />
      <Page3 user={user} />
      <Page4 user={user} />
      <Page5 user={user} />
      <Page6 />
      <Page7 />
      <button className="print-btn" onClick={() => window.print()}>
        <i className="bi bi-printer-fill"></i> Print
      </button>
    </>
  );
};

export default Hallticket;
