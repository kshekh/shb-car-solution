import logo from '../../assets/images/shb-solution-logo.png';
import { Link } from "react-router-dom";
const menus = [
    {
        label:'About Us',
        link:'/'
    }, 
    {
        label:'Services',
        link:'/'
    }, 
    {
        label:'Change Booking',
        link:'/'
    }, 
    {
        label:'Careers',
        link:'/'
    },
]
function Footer() {
    return (
    <> 
        <footer className="bg-stone-900">
            <div className="max-w-screen-wrap px-3 wrap:px-5 mx-auto relative z-10 py-5 sm:py-10 ">
                <div className="">
                    <div className="flex flex-wrap justify-between">
                        <Link to="/"><img src={logo} alt="logo" className="h-7" /></Link>
                        <div className="space-y-3 py-4 sm:py-0">
                        {menus.map((item, index) => {
                            return (
                            <>
                            <a key={index} href={item.link} className="sm:text-right text-left text-white hover:text-primary ease-in-out duration-300 font-medium block">{item.label}</a>
                            </>
                             );
                            })}
                        </div>
                    </div>
                    {/* Copyright */}
                    <div className="flex justify-start md:-mt-5">
                        <p className="text-white text-sm">Copyright &#169; Star Car Wash {new Date().getFullYear()}. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
       </>
      );
    }
    
    
    export default Footer;