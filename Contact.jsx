import React, { useState } from "react";
import './Navbar.css'
import { FaAddressBook, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaMobile, FaTwitter, FaVoicemail, FaYoutube } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Feedback submitted successfully');
                // Clear form fields after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error('Error submitting feedback:', error.message);
            alert('Failed to submit feedback');
        }
    };

    return (
        <>
            <div className="bg1">
                <section className="contact-section">
                    <div className="contact-bg">
                        <h2>Contact us</h2>
                        <div className="line">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <p className="text">Santhosh Yarns is a leading global manufacturer known for top-quality yarn products, innovative production techniques, and a commitment to sustainability. With state-of-the-art facilities and a focus on customer satisfaction, it continues to set industry standards and shape the future of textiles worldwide.</p>
                    </div>

                    <div className="contact-body">
                        <div className="contact-info">
                        <div>
            <span><i class = "fas fa-mobile-alt"></i><FaMobile/></span>
            <span>Phone No.</span>
            <span class = "text">+91 7373858083</span>
          </div>
          <div>
            <span><i class = "fas fa-envelope-open"></i><FaVoicemail/></span>
            <span>E-mail</span>
            <span class = "text">santhoshak7@gmail.com</span>
          </div>
          <div>
            <span><i class = "fas fa-map-marker-alt"><FaAddressBook/></i></span>
            <span>Address</span>
            <span class = "text">96/1 Minnakkadu, Anna Nagar, Chennimalai, Erode.</span>
          </div>
          <div>
            <span><i class = "fas fa-clock"></i><FaClock/></span>
            <span>Opening Hours</span>
            <span class = "text">Monday - Saturday (8:00 AM to 9:00 PM)</span>
          </div>
                        </div>

                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input type="text" className="form-control" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                    <input type="text" className="form-control" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                </div>
                                <div>
                                    <input type="email" className="form-control" placeholder="E-mail" name="email" value={formData.email} onChange={handleChange} required />
                                    <input type="text" className="form-control" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} required />
                                </div>
                                <textarea rows="5" placeholder="Message" className="form-control" name="message" value={formData.message} onChange={handleChange} required></textarea>
                                <input type="submit" className="send-btn" value="send message" />
                            </form>
                            <div>
            <img src = "https://media.istockphoto.com/id/1340452442/vector/customer-support-department-staff-helping-a-client-via-hotline-call-to-solve-a-problem.jpg?s=612x612&w=0&k=20&c=b3HFZ1gkozVWKVENg4il-lqdj8hUfFQCYJemQ9UOnsg=" alt = ""/>
          </div>
                        </div>
                    </div>

                    <div className="contact-footer">
                        <h3>Follow Us</h3>
                        <div className="social-links">
                        <a href = "https://www.facebook.com/santhosh7373/" class = "fab fa-facebook-f"><FaFacebook/></a>
          
          <a href = "https://www.instagram.com/santhosh_ak7/" class = "fab fa-instagram"><FaInstagram/></a>
          <a href = "https://www.linkedin.com/in/santhosh-kumar-93038a11b/?originalSubdomain=in" class = "fab fa-linkedin"><FaLinkedin/></a>
          
                        </div>
                    </div>
                </section>
                <br /><br /><br />
            </div>
        </>
    );
}

export default Contact;
