import React, { useState } from 'react';
import { IoIosMail } from 'react-icons/io';
import { FaKey } from 'react-icons/fa';
import { loginUser } from '../utils/loginUser';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  // Handle form input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted!: ', formData);

    // TODO: Add more validation:
    if (!formData.email || !formData.password) {
      alert('Please fill in all the fields');
    }

    const response = loginUser(formData.email, formData.password);

    

    // Login User function
  };

  return (
    <>
      <div className="flex flex-row w-full h-screen">
        <div className="w-1/4 bg-primary px-10 py-20">
          <h1 className="mb-5">Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <IoIosMail className="h-4 w-4 opacity-70" />
                <input
                  name="email"
                  type="email"
                  className="grow"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div>
              <label className="input input-bordered flex items-center gap-2">
                <FaKey className="h-3 w-4 opacity-70" />
                <input
                  name="password"
                  type="password"
                  className="grow"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button className="btn">Login</button>
          </form>
        </div>
        <div className="w-3/4 bg-orange-400">
          <img
            className="object-contain w-full h-full"
            src="https://images.unsplash.com/photo-1728933102332-a4f1a281a621?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
