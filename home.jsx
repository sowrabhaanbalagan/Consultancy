import React from "react";
import './home.css';
import { useState, useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home=()=>{
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
  
      const scrollPosition = window.scrollY;

      const threshold = 500;
      setShowText1(scrollPosition > threshold);

        setShowText2(scrollPosition > threshold * 1.6);
    };

     window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return(
        <>
     
            <div className="image-container">
            <video src="bgvideo1.mp4" className="video" width="100%" height="100%" autoPlay muted preload="auto" controlsList="nodownload" />
             <div class="overlay-text"><span className="spacer"></span>YARN SOURCING<br/> <span className="space"></span>MADE EASY<br/><br/></div>
            <div class="overlay">&nbsp;&nbsp;&nbsp;&nbsp;Discover and buy top quality yarn at unbeatable prices...</div>
            <br /><br />
            <div className="button">
            <Link to="/offer"><Button variant="contained" color="warning">SPECIAL OFFERS</Button></Link></div>
            </div>
            <br /><br /><br /><br /><br />
            
            <div className="bg">
            <div class="containers">
           
  <div className="images">
    <img src="alt.jpg" alt="Description"/>
  </div>
  <div className={`texts ${showText1 ? 'text-visible' : ''}`}>
    <h2>A Purpose-Led Marketplace <br/>That is Revolutionising The Textile Industry</h2>
    <p>We have built a modern, efficient, and transparent managed marketplace for yarns that allows yarn buyers and sellers to discover real-time yarn prices, information, and market trends.
<br/>
<br/>
Our proprietary processes and flexible unsecured financing options enable yarn sellers to increase their reach and sales with higher margins, and buyers to reduce their raw material and procurement costs, ultimately bringing the yarn industry into the modern age with the use of technology.</p>
    
  </div>
</div>
<div class="container1">
<div className={`texts ${showText2 ? 'text-visible' : ''}`}>
    <h2>Source Highest Quality Yarn From Trusted Suppliers</h2>
    <p>Our team of trusted experts help you source and track your order with complete assurance
</p>
<br/>
<div class="icon-container">
  <div class="left-icons">
    <div class="icon-text">
      <img src="currency.png" alt="Description" class="icon" />
      <p>Best prices</p>
    </div>
    <div class="icon-text">
      <img src="clock.png" alt="Description" class="icon" />
      <p>Quick delivery</p>
    </div>
  </div>
  <div class="right-icons">
    <div class="icon-text">
      <img src="chart.png" alt="Description" class="icon" />
      <p>Accurate analysis</p>
    </div>
    <div class="icon-text">
      <img src="vip.png" alt="Description" class="icon" />
      <p>Exclusive offers</p>
    </div>
  </div>
</div>

  </div>
  <div className="images1">
    <img src="h3.jpg" alt="Description"/>
  </div>
</div>
<br/><br/>
</div>
<div className="h4">
    <h1>Sell On The Santhosh Yarns</h1>
    <p>Grow your business and gain the buyers’ trust with our highly <br />
trusted cost-effective platform</p>
</div><br/>
<img src="1.png" alt="Description" class="icons" />
<br/>
<br/>



</>
    )
}
export default Home