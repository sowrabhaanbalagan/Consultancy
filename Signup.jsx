import React, { useState } from 'react';
import './Signup.css';
import Login from './Login';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to sign up');
            }

            // Handle successful signup
            window.alert('User signed up successfully');

            // Clear form fields
            setFormData({
                fullname: '',
                email: '',
                password: ''
            });
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    return (
        <>
            <div className="about-bg">
                <h2>Sign up</h2>
                <div className="line">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <br />
                <p className="text">Sign up to unleash the exciting products in our "SANTHOSH YARNS"!!! <br />Sign up and explore more....</p>
            </div>

            <div className="container">
                <img src="sign up-09.jpg" alt="Signup Image" className="signup-image" />
                <div className='form-container'>
                    <h2>Signup</h2>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                        <input type="submit" value="Sign Up" />
                        <br /><br />
                        <p>Already have an account ? <Link to="/login"><b> Sign-in</b></Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
