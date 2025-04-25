import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [fullNav, setFullNav] = useState(false)

  // Show on screen NavbAr 
  const showNavBar = ()=>{
    setFullNav(true);
  }
  // Hide on screen NavbAr 
  const hideFullNav = ()=>{
    setFullNav(false);
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-4">
      {/* Company Name  */}
      <div className="comp-name w-full flex items-center justify-center border-b-2">
        {/* logo img  */}
        <img src="public\header-img\logo.png" alt="" className="w-[50px] " />

        {/* logo name  */}
        <div className="flex flex-col leading-5">
          <h2 className="text-[2rem] font-semibold font-mono">SHARKI</h2>
          <p className="text-[0.6rem] font-[470] tracking-[0.52rem] ml-1">
            lifestyle
          </p>
        </div>
      </div>

      {/* Menu Bars for responsive Nav */}
      <div className="menu-bar">
        <FontAwesomeIcon icon={faBars} className="text-[25px]" />
      </div>

      {/* Nav > Menu items  */}
      <div className="menu-items w-[70%] flex items-center gap-7 ">
        {["New Arrivals", "Men", "Women", "Boys & Girls", "Fragrances"].map(
          (items, idx) => (
            <a key={idx} className="text-[0.8rem] font-semibold" href="">
              {items}
            </a>
          )
        )}
      </div>

      {/* Search Bar & User profile  */}
      <div className="flex items-center gap-3">
        {/* Sarch Bar  */}
        <div className="search h-[25px] w-[170px] flex items-center">
          <input
            className="search-bar bg-blue-100 h-full w-[85%] outline-blue-950 text-[0.7rem] px-1 rounded-l-sm"
            type="search"
          />
          <button onClick={showNavBar} className="search-icon h-full w-[15%] bg-blue-900 text-white px-1 rounded-r-sm text-sm flex items-center justify-center cursor-pointer">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        {/* User profile option  */}
        <div className="profile text-white text-sm bg-blue-900 rounded-full h-[25px] w-[25px] flex items-center justify-center cursor-pointer">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>



      {/* Search on full screen  */}
      {fullNav && 
        <div className="h-[90vh] w-[80vw] bg-slate-200 rounded-lg flex items-start justify-center fixed top-0 left-0 my-[5vh] mx-[10vw] py-8 z-10">
        <button onClick={hideFullNav} className="bg-blue-600 h-[1.5rem] w-[1.5rem] text-[0.8rem] text-white font-semibold rounded-full absolute right-[-1.8rem] top-0 hover:bg-blue-900">
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="flex items-center gap-1">
          <input type="search" placeholder="Search anything you want" className="h-[2.5rem] w-[50vw] rounded-l-[7px] px-2 text-[0.8rem] outline-blue-950" />
          <button className="bg-blue-900 text-white px-3 h-[2.5rem] rounded-r-[7px]">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      }
      </div>
      
  );
};

export default Navbar;
