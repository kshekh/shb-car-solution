import React, { useState } from 'react'
import logo from '../../assets/images/shb-solution-logo.png';
import { Link } from "react-router-dom";
import Bell from "../Icons/Bell";
import User from "../Icons/User";
 
function Header() {
  
  const [logedIn, setLogedIn] = useState(false)
  const [toggle, setToggle] = useState(true)
  return (    
      <header className="flex justify-center w-full border-b border-black/10"> 
        <div className="max-w-screen-wrap wrap:px-5 px-2 mx-auto w-full">
        <div className="flex justify-between items-center py-2">
          <div className="flex">
            <Link to="/"><img src={logo} alt="logo" className="h-3 lg:h-7" /></Link>
          </div>
          <div class="flex items-center gap-2 lg:hidden">
          <Link to="/step-1" className="text-white rounded-full bg-primary py-1 px-2 font-dm-sans leading-none text-sm truncate ">Book Online Now</Link> 
          <button type="button" onClick={() => setToggle(!toggle)} class="inline-flex outline-none focus:outline-none focus:ring-0 items-center justify-center rounded-md p-2 text-stone-800 hover:bg-gray-700 hover:text-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <User className="w-3"  />
           
        </button>
      </div>

        {/* Desktop Mneu */}
          <div className="hidden lg:flex gap-2 items-center justify-end py-7"> 
          {/* if logedIn !== true */}    
              {logedIn &&( 
            <div className="gap-2">
              <Link to="/step-1" className="text-white rounded-full bg-primary py-1 px-4 font-dm-sans ">Book Online Now</Link> 
              
              <Link className="py-1 px-4 font-dm-sans rounded-full font-medium text-stone-800 hover:bg-primary hover:text-white ease-in-out duration-300">Log In</Link>
            </div>
              )}
              {/* else */}
            
            <ul className="flex gap-1 xl:gap-2 items-center "> 
              <li>
                <Link className="p-1 xl:px-3 font-medium text-stone-800 hover:text-primary ease-in-out duration-300">Dashboard</Link>
                </li>
                <li>
                <Link className="p-1 xl:px-3 font-medium text-stone-800 hover:text-primary ease-in-out duration-300">All Bookings</Link>
              </li>
                <li>
                <Link className="p-1 xl:px-3 font-medium text-stone-800 hover:text-primary ease-in-out duration-300">Employees</Link>
              </li>
                <li>
                <Link className="p-1 xl:px-3 font-medium text-stone-800 hover:text-primary ease-in-out duration-300">Services</Link>
              </li>
                <li>
                <button className="p-1 xl:px-3 font-medium text-stone-800 hover:text-primary ease-in-out duration-300 flex gap-2"><span>Notifications</span><span className="relative"><Bell className="w-6" /><span className='absolute -top-1 -right-1 bg-primary rounded-2xl leading-none text-white px-1.5 py-0.5 text-xs'>1</span></span></button>
              </li>
                <li>
                <button className="p-1 xl:px-3 font-medium text-stone-800 hover:text-primary ease-in-out duration-300 flex gap-2"><span>Jakob Köler</span><User className="w-5" /></button>
              </li>
            </ul>                    
          </div>


        {/* Mobile menu */}
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



          {/* if logedIn !== true */}    
              {logedIn &&( 
            <div className="gap-2 flex justify-center py-3">
              <Link to="/step-1" className="text-white rounded-full bg-primary py-1 px-4 font-dm-sans ">Book Online Now</Link> 
              
              <Link className="py-1 px-4 font-dm-sans rounded-full font-medium text-stone-800 hover:bg-primary hover:text-white ease-in-out duration-300">Log In</Link>
            </div>
              )}
              {/* else */}
            
            <ul className="py-3 text-center divide-y divide-grey-2"> 
              <li>
                <Link className="p-3 block font-medium text-stone-800 hover:text-primary ease-in-out duration-300">Dashboard</Link>
                </li>
                <li>
                <Link className="p-3 block font-medium text-stone-800 hover:text-primary ease-in-out duration-300">All Bookings</Link>
              </li>
                <li>
                <Link className="p-3 block font-medium text-stone-800 hover:text-primary ease-in-out duration-300">Employees</Link>
              </li>
                <li>
                <Link className="p-3 block font-medium text-stone-800 hover:text-primary ease-in-out duration-300">Services</Link>
              </li>
                <li>
                <button className="p-3 justify-center w-full font-medium text-stone-800 hover:text-primary ease-in-out duration-300 flex gap-2"><span>Notifications</span><span className="relative"><Bell className="w-6" /><span className='absolute -top-1 -right-1 bg-primary rounded-2xl leading-none text-white px-1.5 py-0.5 text-xs'>1</span></span></button>
              </li>
                <li>
                <button className="p-3 justify-center w-full font-medium text-stone-800 hover:text-primary ease-in-out duration-300 flex gap-2"><span>Jakob Köler</span><User className="w-5" /></button>
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
