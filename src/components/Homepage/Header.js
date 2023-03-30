import logo from '../../assets/images/shb-solution-logo.png';
import { Link } from "react-router-dom";

function Header() {
  return (    
      <header className="flex justify-center w-full"> 
        <div className="max-w-screen-wrap wrap:px-5 px-2 mx-auto w-full">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Link to="/"><img src={logo} alt="logo" className="h-7" /></Link>
          </div>
          <div className="flex gap-2 items-center py-7">
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
        </div>
        </div>             
      </header>   
  );
}

export default Header;
