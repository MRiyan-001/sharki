import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="h-auto w-full">
      {/* Footer Start */}
      <div className="f-start min-h-[70vh] bg-zinc-300 p-10 flex justify-evenly gap-10">

        {/* Company Details */}
        <div className="forContact flex flex-col gap-4">
          {/* company logo */}
          <a href="" className="h-[15vmax] w-[15vmax] rounded-full">
            <img src="public\footer-img\fimg.png" alt="SHARKI-Lifestyle" className="h-[100%] w-[100%] rounded-full" />
          </a>
          
          {/* company contact details  */}
          <div className="flex flex-col text-[0.8rem] leading-4">
            <span>
              <strong>Call Us:</strong>
              <a href=""> +92 315 0000111</a>
            </span>
            <span>
              <strong>Email:</strong>
              <a href=""> mrh.world001@gmail.com</a>
            </span>
          </div>

          {/* company social apps details  */}
          <ul className="flex items-center gap-3 text-[1.3rem]">
              <li className="hover:scale-[1.1]"><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li className="hover:scale-[1.1]"><a href=""><FontAwesomeIcon icon={faXTwitter} /></a></li>
              <li className="hover:scale-[1.1]"><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></li>
            </ul>
        </div>

        {/* Company Information  */}
        <div className="forInfo h-20 flex flex-col gap-5">
          <h2 className="font-bold">INFORMATION</h2>
          <ul className="flex flex-col leading-7 text-sm">
            <li>
              <a href="">Shipping & Information</a>
            </li>
            <li>
              <a href="">Store Locator</a>
            </li>
            <li>
              <a href="">Terms & Condition</a>
            </li>
            <li>
              <a href="">Wholsale</a>
            </li>
          </ul>
        </div>

        {/* company customer support  */}
        <div className="forSupport  flex flex-col gap-5">
          <h2 className="font-bold">CUSTOMER SUPPORT</h2>
          <ul className="flex flex-col leading-7 text-sm">
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Return & Exchange</a>
            </li>
            <li>
              <a href="">FAQ's</a>
            </li>
          </ul>
        </div>

        {/* company latest updates  */}
        <div className="forSubscribe flex flex-col gap-5 ">       
          <h2 className="font-bold">OUR NEWSLETTER</h2>
          <p className="text-[0.8rem]">New arrivals. Exclusive previews. First access to sales. <br />
            <strong>Signup</strong> to recieve our latest updates.
          </p>
          <input className="w-full py-2 px-2 text-sm rounded-md outline-blue-950" type="email" placeholder="Enter your email"/>
          <button className="w-full bg-blue-700 text-white text-[0.9rem] font-semibold py-2 rounded-full">SIGNUP</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
 