import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const API = import.meta.env.VITE_API_URL;
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}api/auth/admin/students`, {
        withCredentials: true,
      })
      .then(res => setStudents(res.data))
      .then(res => console.log(res.data))
      .catch(() => alert('Not authorized!'));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center text-danger fw-bold">மாணவர் பதிவுகள்</h2>
      <p className="text-center text-muted">
        Admin — Full Student Database View
      </p>

      <div className="card" style={{ borderRadius: '15px', padding: '15px' }}>
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">
            <thead className="table-dark text-center">
              <tr>
                <th>ID</th>
                <th>Register No</th>
                <th>Name (Tamil)</th>
                <th>Name (English)</th>
                <th>DOB</th>
                <th>Phone</th>
                <th>Course</th>
                <th>App No</th>
              </tr>
            </thead>

            <tbody>
              {students.map(stu => (
                <tr key={stu.id} className="text-center">
                  <td>{stu.id}</td>
                  <td>{stu.register_number}</td>
                  <td>{stu.name_tamil}</td>
                  <td>{stu.name_english}</td>
                  <td>{stu.dob}</td>
                  <td>{stu.phone_no}</td>
                  <td>
                    {stu.course_code} - {stu.course_name}
                  </td>
                  <td>{stu.app_no}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
