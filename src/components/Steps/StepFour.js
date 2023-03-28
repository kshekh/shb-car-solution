// import Icon from "./Icon";
import ArrowRight from "../Icons/ArrowRight";
import Calendar from "../Icons/Calendar";
import Clock from "../Icons/Clock";
import Edit from "../Icons/Edit"; 
import QR from "../../assets/images/QR-code.svg"; 
import React, { useState } from "react";
 

const steps = [
  {
    title: "Step 1",
    subtitle: "Choose your services",
    active: true, 
  }, 
  {
    title: "Step 2",
    subtitle: "Select Date & Time",
    active: true,  
  }, 
  {
    title: "Step 3",
    subtitle: "Customer Details", 
    active: true,  
  }, 
  {
    title: "Step 4",
    subtitle: "Payment", 
    active: true,  
  },
]

 


function StepThree() {

const [selected, setSelected] = useState("billingAddress");
const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
    
    return (    
<section>
  <div className="max-w-screen-wrap px-2 wrap:px-5 mx-auto space-y-20">
      {/* Steps */}
      <div className="relative max-w-screen-lg mx-auto mt-10 ">
        <div className="flex ml-2 h-1.5 left-1/2 -translate-x-1/2 w-[calc(100%-120px)] bg-grey-2 absolute top-7 -translate-7">
          <div className="h-full bg-primary ml-7 w-full"><span className="invisible">steps</span></div>  
        </div>
        <div className="flex justify-between gap-2 relative z-10">
           {steps.map((step, index) => {
                    return (
                      <>
                      <div className="space-y-2 flex flex-col justify-center items-center"  key={index}>
                      <div className={`rounded-full  w-14 h-14 relative top-0.5 ${step.active ? 'bg-primary' : 'bg-grey-2'}`}></div>
                      <p className={`text-grey text-center font-dm-sans ${step.active ? 'opacity-100' : 'opacity-0'}`}>
                        <strong className="block font-semibold">{step.title}</strong>
                        <span className="text-sm">{step.subtitle}</span>
                      </p>
                    </div>
                   
                    </>
                    );
                })}            
          </div>
      </div>

      {/* Step-1 content */}

        
          <div className="max-w-screen-lg mx-auto">
            <div className="space-y-20">
              <div className="grid grid-cols-2 gap-20">
                
                                       
                <div className="relative pr-20">
                    {/* Card Details */}   
                    <div className={`space-y-10 hidden`}>
                        <h2 className="text-2xl text-grey-3xl font-medium">Card Information</h2>
                        <div className="space-y-3">
                            <input type="text" className="w-full border border-grey rounded-full py-3 px-5 text-grey placeholder-grey hover:border-primary focus:border-primary ease-in-out duration-300 outline-none focus:ring-primary focus:text-primary focus:placeholder-primary" placeholder="Card Holder Name" />
                            <input type="text" className="w-full border border-grey rounded-full py-3 px-5 text-grey placeholder-grey hover:border-primary focus:border-primary ease-in-out duration-300 outline-none focus:ring-primary focus:text-primary focus:placeholder-primary" placeholder="Card Number" />
                             <div className="grid grid-cols-2 gap-10">
                             <input type="text" className="w-full border border-grey rounded-full py-3 px-5 text-grey placeholder-grey hover:border-primary focus:border-primary ease-in-out duration-300 outline-none focus:ring-primary focus:text-primary focus:placeholder-primary" placeholder="Expiry Date" /> 
                             <input type="text" className="w-full border border-grey rounded-full py-3 px-5 text-grey placeholder-grey hover:border-primary focus:border-primary ease-in-out duration-300 outline-none focus:ring-primary focus:text-primary focus:placeholder-primary" placeholder="Security Code" /> 
                             </div>
                        </div>
                        <div className="flex justify-end">
                          <button className="border border-grey rounded-full text-grey py-3 px-6 font-medium hover:border-primary hover:bg-primary hover:text-white ease-in-out duration-300 w-32">Pay</button>
                        </div>
                    </div>
                    {/* Thank you message */}
                    <div className="space-y-10">
                    <h3 className="text-5xl text-primary font-bold">Thank your for your booking!</h3>
                    <p className="text-2xl flex-1 text-grey">You’ll receive a payment confirmation on your email address soon.</p>
                    <p className="text-2xl flex-1 text-grey">Show the QR code below to the employee when you arrive.</p>

                    <div className="flex justify-start pt-4"> 
                        <img src={QR} alt="" />
                    </div>

                    </div>
                </div>
 
                
                <div className="space-y-14">
                  <div className="space-y-10">
                    <h3 className="text-5xl text-primary font-bold">Booking Summary</h3>
                    {/* Date and time */}
                  
                        

                        <div className="space-y-1">
                            <div className="flex justify-between">
                                <div className="flex gap-3">
                                    <Calendar className="text-stone-800 w-4 shrink-0" /> <p className="text-stone-800 text-lg font-medium">03 March 2023</p>
                                </div>
                                <button className="text-stone-800 rounded-full p-2 ease-in-out duration-300 hover:bg-primary hover:text-white hidden"><Edit className="w-4" /></button>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-3">
                                    <Clock className="text-stone-800 w-5 shrink-0" /> <p className="text-stone-800 text-lg font-medium">12:30 AM</p>
                                </div>
                                <button className="text-stone-800 rounded-full p-2 ease-in-out duration-300 hover:bg-primary hover:text-white hidden"><Edit className="w-4" /></button>
                            </div>
                        </div>
                   


                    <ul className="space-y-4">
                        <li className="justify-between flex text-grey-3 text-2xl ">
                            <p>Car Wash</p>
                            <p><sup className="text-sm">CHF</sup>70</p>
                        </li>
                        <li className="justify-between flex text-grey-3 text-2xl">
                            <p>Interior Cleaning</p>
                            <p><sup className="text-sm">CHF</sup>70</p>
                        </li>
                        <li className="justify-between flex text-grey-3 text-2xl">
                            <p>Oil change</p>
                            <p><sup className="text-sm">CHF</sup>70</p>
                        </li>
                        <li className="justify-between flex text-grey-3 text-2xl font-semibold">
                            <p>Total</p>
                            <p><sup className="text-sm">CHF</sup>210</p>
                        </li>
                    </ul>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-10">
                

                <div className="flex justify-between pb-5">
                  <button className="flex text-primary gap-4 font-dm-sans items-center text-xl py-2 px-4 hover:bg-primary hover:text-white rounded-md ease-in-out duration-300 group"> <ArrowRight className="w-4 rotate-180" /><span className="text-grey group-hover:text-white ease-in-out duration-300">Previous</span></button>
                  <button className="flex text-primary gap-4 font-dm-sans items-center text-xl py-2 px-4 hover:bg-primary hover:text-white rounded-md ease-in-out duration-300"><span>Next</span> <ArrowRight className="w-4" /></button>
                </div>

              </div>
            </div>
          </div>

  </div>
</section>
  );
}

export default StepThree;
