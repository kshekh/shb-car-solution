import logo from '../../assets/images/shb-solution-logo.png';
import { Link } from "react-router-dom";

function Header() {
  return (    
      <header className="flex justify-center w-full border-b border-black/10"> 
        <div className="max-w-screen-wrap wrap:px-5 px-2 mx-auto w-full">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Link to="/"><img src={logo} alt="logo" className="h-7" /></Link>
          </div>
          <div className="flex gap-2 items-center justify-end py-7">          
            <div className="flex gap-2">
              <Link to="/step-1" className="text-white rounded-full bg-primary py-1 px-4 font-dm-sans ">Book Online Now</Link> 
              {/* if logedIn !== true */}
              <Link className="py-1 px-4 font-dm-sans rounded-full font-medium text-warm-gray-800 hover:bg-primary hover:text-white ease-in-out duration-300">Log In</Link>
              {/* else */}

            </div>
          </div>
        </div>
        </div>             
      </header>   
  );
}

export default Header;
