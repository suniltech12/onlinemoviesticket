import React from "react"
import appStore from "../../images/appstore.png"
import playStore from "../../images/playstores.png"
import "./footer.css"
const Footer=()=> {
  
  return (
   
      <footer id="footer">
        <div className="leftfooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>Download app for Andriod and IOS mobile phone</p>
          <img src={playStore} alt ="playStore" className="img1" />
          <img src={appStore} alt ="appStore" className="img1" />
        </div>
        <div className="midfooter">
          <h1>moviesTicket</h1>
          <p>High Quality is our first priority</p>
          <p> Copyright 2021 &copy; </p>
        </div>
        <div className="rightfooter">
         <h4>Follow Us</h4>
         <a href="https://www.instagram.com/accounts/login/">Instagram</a>
         <a href="https://www.youtube.com/">Youtube</a>
         <a href="https://www.facebook.com/">Facebook</a>
        </div>
      </footer>
   
  );
}

export default Footer;
