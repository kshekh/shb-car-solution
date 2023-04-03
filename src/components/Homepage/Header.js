import React, { useState } from 'react'
import logo from '../../assets/images/shb-solution-logo.png';
import { Link } from "react-router-dom";
import User from "../Icons/User";

function Header() {
  const [toggle, setToggle] = useState(true)
  return (    
      <header className="flex justify-center w-full"> 
        <div className="max-w-screen-wrap wrap:px-5 px-2 mx-auto w-full">
        <div className="flex justify-between items-center py-2 gap-2">
          <div className="flex">
            <Link to="/"><img src={logo} alt="logo" className="h-4 sm:h-7" /></Link>
          </div>


        <div class="flex items-center md:hidden">
        <Link to="/step-1" className="text-white rounded-full bg-primary py-1 px-2 font-dm-sans leading-none text-sm truncate ">Book Online Now</Link> 
        <button type="button" onClick={() => setToggle(!toggle)} class="inline-flex outline-none focus:outline-none focus:ring-0 items-center justify-center rounded-md p-3 text-white hover:bg-gray-700 hover:text-white " aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>          
          <User className="w-3"  />
        </button>
      </div>
           <div className="hidden md:flex gap-2 items-center py-7">
            <ul className="flex gap-2"> 
              <li>
                <Link className="py-1 px-3 font-medium text-white hover:text-primary ease-in-out duration-300">About Us</Link>
                </li>
                <li>
                <Link className="py-1 px-3 font-medium text-white hover:text-primary ease-in-out duration-300">Services</Link>
              </li>
            </ul>

            <div className="flex gap-2">
              <Link to="/step-1" className="bg-white rounded-full text-primary py-1 px-4 font-dm-sans ">Book Online Now</Link> 
              <Link className="py-1 px-4 rounded-full font-medium text-white hover:bg-white hover:text-primary ease-in-out duration-300">Log In</Link>
            </div>
          </div>
      {!toggle && (
            <div className="fixed inset-0 bg-white z-50 p-2"> 
             <div className='flex justify-between items-center border-b border-grey-2 pb-2'>
            <div className="flex">
            <Link to="/"><img src={logo} alt="logo" className="h-3 lg:h-7" /></Link>
            </div>
            <div className='flex gap-2 items-center'>
            <Link to="/step-1" className="text-white rounded-full bg-primary py-1 px-2 font-dm-sans leading-none text-sm truncate ">Book Online Now</Link> 
            <button type="button" onClick={() => setToggle(!toggle)} class="inline-flex outline-none focus:outline-none focus:ring-0 items-center justify-center rounded-md p-2 text-stone-800 hover:bg-gray-700 hover:text-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
            <svg class={`h-4 w-4  `} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </button>
          </div>
          </div>
            <ul className="space-y-1 pt-2 divide-y divide-grey-2"> 
              <li>
                <Link className="py-2 px-3 block text-center font-medium text-stone-800 hover:text-primary ease-in-out duration-300">About Us</Link>
                </li>
                <li>
                <Link className="py-2 px-3 block text-center font-medium text-stone-800 hover:text-primary ease-in-out duration-300">Services</Link>
              </li>
                <li>
                <Link className="py-2 px-3 block text-center font-medium text-stone-800 hover:text-primary ease-in-out duration-300">Log In</Link>
              </li>
            </ul>

             
          </div>
        )}
        </div>
        </div>             
      </header>   
  );
}

export default Header;
