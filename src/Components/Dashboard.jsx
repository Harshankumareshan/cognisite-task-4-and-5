import React, { useState } from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
  const [students, setStudents] = useState([
    {
      id: '1',
      Adminname: 'John Doe',
      organization: 'Tvs Inc.',
      email: 'john.doe@example.com',
      mobile: '943-456-7890',
      address: '123 Main St, bangalore'
    },
    {
      id: '1',
      Adminname: 'Ram kumar',
      organization: 'Brilla groups.',
      email: 'Brilla@example.com',
      mobile: '678-456-7890',
      address: '123 Main St, bangalore'
    },
    {
      id: '1',
      Adminname: 'Rahul',
      organization: 'bPS cement.',
      email: 'Rahul@example.com',
      mobile: '886-456-7890',
      address: '123 Main St, Anytown'
    }
  ]);
  const [newStudent, setNewStudent] = useState({
    Adminname: '',
    organization: '',
    email: '',
    mobile: '',
    address: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTableMinimized, setIsTableMinimized] = useState(false);

  const handleAddStudent = () => {
    // Generate a unique ID for the new student
    const newId = (students.length + 1).toString();

    // Add the new student to the students array
    setStudents([...students, { ...newStudent, id: newId }]);

    // Close the modal
    setIsModalOpen(false);

    // Clear the new student form fields
    setNewStudent({
      Adminname: '',
      organization: '',
      email: '',
      mobile: '',
      address: ''
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Navbar />
      <div className="flex flex-row flex-grow">
        {/* Sidebar */}
        <div className="w-40 bg-blue-700 flex flex-col items-center py-4">
          <div className="w-12 h-12 flex items-center justify-center mb-auto">
            <img src='/logo.jpg' alt="Logo" className="w-12 h-12 mt-12" />
          </div>
          <div className="flex-grow flex flex-col items-center space-y-8 justify-center">
            <div className="relative group flex items-center space-x-4 cursor-pointer">
      
              
              <h1 className='text-white'>Dashboard</h1>
            </div>
            <div className="relative group flex items-center space-x-4 cursor-pointer">
             
             
              <h1 className='text-white'>Admin list</h1>
            </div>
            <div className="relative group flex items-center space-x-4 cursor-pointer">
             
             
              <h1 className='text-white'>Settings</h1>
            </div>
            <div className="relative group flex items-center space-x-4 cursor-pointer" onClick={() => setSelectedIcon('hat')}>
              
              
              <h1 className='text-white'>Organiz</h1>
            </div>
          </div>
          <div className="mt-auto">
            <img src='/logout.png' alt="Logout Icon" className="w-10 h-10 mb-12 cursor-pointer" onClick={handleLogout} />
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex-1 bg-white rounded-lg ml-12 mt-12 mr-8 mb-6 shadow-lg p-6 flex flex-col ${isTableMinimized ? 'minimized' : ''}`}>
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-cyan-600 text-black rounded-full px-4 py-2 flex items-center space-x-2"
              onClick={() => setIsModalOpen(true)}
            >
              
              <span>Add New Site +</span>
            </button>
            <div>
              <button
                className="bg-cyan-300 font-bold text-gray-900 rounded-full px-4 py-1 mr-2"
                onClick={() => setIsTableMinimized(!isTableMinimized)}
              >
                -
              </button>
              <button
                className="bg-cyan-300 font-bold text-gray-900 rounded-full px-4 py-1"
                onClick={() => setIsTableMinimized(!isTableMinimized)}
              >
                +
              </button>
            </div>
          </div>

          {!isTableMinimized && (
            <div className="flex-grow overflow-x-auto">
              <table className="min-w-full border bg-white">
                {/* Table headers */}
                <thead>
                  <tr className="w-full bg-cyan-600 text-left">
                    <th className="py-3 px-4">S.No</th>
                    <th className="py-3 px-4">Site name</th>
                    <th className="py-3 px-4">Organization</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Phone</th>
                    <th className="py-3 px-4">SiteAddress</th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody>
                  {students.map((student, index) => (
                    <tr key={student.id} className="border-b">
                      <td className="py-3 px-4">{index + 1}</td>
                      <td className="py-3 px-4">{student.Adminname}</td>
                      <td className="py-3 px-4">{student.organization}</td>
                      <td className="py-3 px-4">{student.email}</td>
                      <td className="py-3 px-4">{student.mobile}</td>
                      <td className="py-3 px-4">{student.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Add Student Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Add site details</h2>
            {/* Form fields for adding a student */}
            <input
              type="text"
              placeholder="Site Name"
              value={newStudent.Adminname}
              onChange={(e) => setNewStudent({ ...newStudent, Adminname: e.target.value })}
              className="border border-gray-300 rounded-full px-4 py-2 mb-2 block w-full"
            />
            <input
              type="text"
              placeholder="Organization"
              value={newStudent.organization}
              onChange={(e) => setNewStudent({ ...newStudent, organization: e.target.value })}
              className="border border-gray-300 rounded-full px-4 py-2 mb-2 block w-full"
            />
            <input
              type="email"
              placeholder="Email"
              value={newStudent.email}
              onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
              className="border border-gray-300 rounded-full px-4 py-2 mb-2 block w-full"
            />
            <input
              type="tel"
              placeholder="Mobile"
              value={newStudent.mobile}
              onChange={(e) => setNewStudent({ ...newStudent, mobile: e.target.value })}
              className="border border-gray-300 rounded-full px-4 py-2 mb-2 block w-full"
            />
            <input
              type="text"
              placeholder="Site Address"
              value={newStudent.address}
              onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })}
              className="border border-gray-300 rounded-full px-4 py-2 mb-4 block w-full"
            />
            <div className="flex justify-end">
              <button
                className="bg-cyan-600 text-white rounded-full px-4 py-2"
                onClick={handleAddStudent}
              >
                Add
              </button>
              <button
                className="bg-gray-300 text-gray-800 rounded-full px-4 py-2 ml-4"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
