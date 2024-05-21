import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import { API_URL } from '../services/config';

import './Login.css'; // Import your CSS file
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const CustomInput = ({ type, name, placeholder, value, onChange, icon }) => (
  <div className="input-container">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <div className="icon">{icon}</div>
  </div>
);

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    employeeId: '',
    password: '',
  });
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const passwordIcon = showPassword ? <FaEyeSlash onClick={handleTogglePassword} /> : <FaEye onClick={handleTogglePassword} />;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate('/asset/dashboard')
    // fetch(`${API_URL}/signin`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Sign In successful:', data);
    //     if (data && data.token) {
    //       localStorage.setItem('token', data.token);
    //       localStorage.setItem('isLogin', true);

    //       let user = {
    //         username: data.name,
    //         email: data.email_id,
    //         role: data.role,
    //       };
    //       console.log('user', user);
    //       localStorage.setItem('user', JSON.stringify(user));

    //       if (data.role !== 'ADMIN') {
    //         navigate('/');
    //       } else {
    //         navigate('/admin');
    //       }
    //       toast.success('Logged in successfully');
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error during Sign In:', error);
    //     toast.error('Login Failed');
    //   });
  };

  return (
    <div className="login-page">
      <div className="container">
      <div className="login-form-container form-container">
       <img src="/logo2.png" alt="Verinite Open Graph Logo" width={90} className="mb-4"/>
        <h1 style={{ color: '#41b5f0' }}>Asset Manager</h1>
        <form onSubmit={handleSubmit} className="space-y-4 login-form">
          <input
            type="text"
            name="employeeId"
            placeholder="Employee Id"
            value={formData.employeeId}
            onChange={handleChange}
          />

          <CustomInput
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            icon={passwordIcon}
          />
          <button type="submit" className="submit-btn">
            <span><b>LOGIN</b></span>
          </button>

          <div className="text-label">
           <Link to="/sign-up">Reset Password</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;