import React from "react";
import './home.css';

const Footer=()=>{
    return(
        <>
        <footer class="footer">
<img src="footer.png" alt="Description" class="foot" />
  <div className="footer-content">
    <div className="footer-left">
      <h3>About Us</h3>
      <p>Say goodbye to the outdated and opaque methods of buying and selling yarn. Join us and take control of your business with ease, transparency, and fairness!</p>
    </div>
    <div className="footer-center">
      <h3>Contact Us</h3>
      <p>Email: santhoshk7@gmail.com</p>
      <p>Phone: +91 7373858083</p>
    </div>
    {/* <div class="footer-right">
      <h3>Follow Us</h3>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div> */}
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Santhosh Yarns. All rights reserved.</p>
  </div>
</footer>
        </>
    )
}
export default Footer