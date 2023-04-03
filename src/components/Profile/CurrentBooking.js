// import Icon from "./Icon";
import Edit from "../Icons/Edit";
import Calendar from "../Icons/Calendar";
import Clock from "../Icons/Clock";
import { Link } from "react-router-dom";
import Layout from "../../pages/layout";
import CarWash from "../Icons/CarWash";
import InteriorCleaning from "../Icons/InteriorCleaning";
import OilChange from "../Icons/OilChange";
 

function CurrentBooking() {
  return (
    <Layout>
      <section>
        <div className="max-w-screen-wrap px-3 wrap:px-5 mx-auto space-y-16">


            <div className="pt-10 space-y-10">
                <h3 className="text-3xl xl:text-5xl text-primary font-bold">
                 Your Current Booking
                </h3>
                <div className="sm:grid sm:grid-cols-2 ">
                    <div className="flex justify-between items-center">
                    <div className="space-y-3 lg:space-y-5">
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <Calendar className="text-stone-800 w-4 xl:w-6 shrink-0" /> 
                        <p className="text-stone-800 xl:text-xl font-medium">
                          03 March 2023
                        </p>
                      </div>
                      <button className="text-stone-800 rounded-full p-2 ease-in-out duration-300 hover:bg-primary hover:text-white hidden">
                        <Edit className="w-6" />
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <Clock className="text-stone-800 w-5 xl:w-7 shrink-0" /> 
                        <p className="text-stone-800 xl:text-xl font-medium">
                          12:30 AM
                        </p>
                      </div>
                      <button className="text-stone-800 rounded-full p-2 ease-in-out duration-300 hover:bg-primary hover:text-white hidden">
                        <Edit className="w-4" />
                      </button>
                    </div>
                  </div>
                    <div className="sm:pr-20"><Link to="/" className="text-grey underline hover:no-underline hover:text-primary">Change</Link></div>
                    </div>   
                </div>
            </div>


          <div className="md:grid md:grid-cols-2 flex flex-col gap-10 xl:gap-20 pb-20">
           <div className="space-y-5">
                <h3 className="text-3xl text-grey-3 font-dm-sans font-semibold">
                  Services
                </h3>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <div className="flex justify-center gap-4 items-center"><CarWash className="text-primary w-7 xl:w-10" /><p className="text-grey lg:text-lg xl:text-xl font-medium">Car Wash</p></div>
                        <p className="text-grey lg:text-lg xl:text-xl font-medium"><sup class="text-sm">CHF</sup>70</p>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex justify-center gap-4 items-center"><InteriorCleaning className="text-primary w-7 xl:w-10" /><p className="text-grey lg:text-lg xl:text-xl font-medium">Interior Cleaning</p></div>
                        <p className="text-grey lg:text-lg xl:text-xl font-medium"><sup class="text-sm">CHF</sup>70</p>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex justify-center gap-4 items-center"><OilChange className="text-primary w-7 xl:w-10" /><p className="text-grey lg:text-lg xl:text-xl font-medium">Oil change</p></div>
                        <p className="text-grey lg:text-lg xl:text-xl font-medium"><sup class="text-sm">CHF</sup>70</p>
                    </div>

                    <div className="flex justify-between pt-1">
                    <p className="text-grey lg:text-lg xl:text-xl font-semibold pl-14">Total</p>
                    <p className="text-grey lg:text-lg xl:text-xl font-semibold">
                        <sup className="text-sm">CHF</sup>210
                    </p>
                    </div>

                </div>
                <div className="xs:grid xs:grid-cols-2 gap-5 flex flex-col xs:gap-10 pt-5 xl:pt-10">
                
                        <button class="border border-grey rounded-full text-grey py-2 px-6 font-medium hover:border-primary hover:bg-primary hover:text-white ease-in-out duration-300">Cancel Booking</button>
                        
                        <button class="border border-grey-2 bg-grey-2 rounded-full text-grey py-2 px-6 font-medium hover:border-primary hover:bg-primary hover:text-white ease-in-out duration-300">Save Changes</button>
                        
                </div>
            </div>
           <div className="space-y-5 max-w-md">
                 <h3 className="text-3xl text-grey-3 font-dm-sans font-semibold">
                  Payment Details
                 </h3>

                <div className="space-y-2 font-dm-sans">
                     <p class="text-grey text-lg lg:text-xl xl:text-2xl font-semibold leading-none">Card Holder Name</p>
                     <p class="text-grey leading-none lg:text-lg xl:text-xl">John Doe</p>
                </div>
                <div className="space-y-2 font-dm-sans">
                     <p class="text-grey text-lg lg:text-xl xl:text-2xl font-semibold leading-none">Card Number</p>
                     <p class="text-grey leading-none lg:text-lg xl:text-xl">1234 5678 9123 4567</p>
                </div>
                <div className="xs:grid xs:grid-cols-2 font-dm-sans">
                    <div className="space-y-2">
                        <p class="text-grey text-lg lg:text-xl xl:text-2xl font-semibold leading-none">Expiry Date</p>
                        <p class="text-grey leading-none lg:text-lg xl:text-xl">03/25</p>
                    </div>
                    <div className="space-y-2">
                        <p class="text-grey text-lg lg:text-xl xl:text-2xl font-semibold leading-none">Security Code</p>
                        <p class="text-grey leading-none lg:text-lg xl:text-xl">284</p>
                    </div>
                </div>
            </div>            
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CurrentBooking;