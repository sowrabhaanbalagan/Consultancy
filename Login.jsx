import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Check if the email is admin email
            if (formData.email === 'admin@example.com'&& formData.password==='admin' ) {
                // Redirect to admin page
                window.location.href = '/productform';
                return;
            }

            // Proceed with database login for other users
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();

            // Handle regular user login
            window.alert('User logged in successfully');

            // Clear form fields
            setFormData({
                email: '',
                password: ''
            });
        } catch (error) {
            window.alert('Error logging in: incorrect email or password');
        }
    };

    return (
        <>
            <div className="about-bg">
                <h2>Sign in</h2>
                <div className="line">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <br />
                <p className="text">Sign in to your account with "SANTHOSH YARNS"!!! Look back at the products you liked with more exciting offers..<br />Sign in and explore more....</p>
            </div>

            <div className="container">
                <img src="signin09.jpg" alt="Signin Image" className="signup-image" />
                <div className='form-container'>
                    <h2>Signin</h2>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                        <input type="submit" value="Sign in" />
                        <br /><br />
                        <p>Don't have an account? <Link to="/signup"><b>Sign-up</b></Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
