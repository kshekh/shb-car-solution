// import Icon from "./Icon";
import CarWash from "../Icons/CarWash";
import TickMark from "../Icons/TickMark";
import InteriorCleaning from "../Icons/InteriorCleaning";
import OilChange from "../Icons/OilChange";
import WindshieldWater from "../Icons/WindshieldWater";
import Ashtray from "../Icons/Ashtray";
import Windshield from "../Icons/Windshield";
import ArrowRight from "../Icons/ArrowRight";


const steps = [
  {
    title: "Step 1",
    subtitle: "Choose your services",
    active: true, 
  }, 
  {
    title: "Step 2",
    subtitle: "Select Date & Time",
    active: false,  
  }, 
  {
    title: "Step 3",
    subtitle: "Choose your services", 
    active: false,  
  }, 
  {
    title: "Step 4",
    subtitle: "Payment", 
    active: false,  
  },
]


const car_parking = [
  {
    item: 'Airport transfer (We drop you off/pick you up)'
  },  
  {
    item: 'Cleaning (exterior/interior)'
  }, 
  {
    item: 'Oil change'
  },
  {
    item: 'Windshield water'
  },
]
const car_cleaning = [
   
  {
    item: 'Cleaning (exterior/interior)'
  }, 
  {
    item: 'Oil change'
  },
  {
    item: 'Windshield water'
  },
]



function StepOne() {
    return (    
<section>
  <div className="max-w-screen-wrap px-2 wrap:px-5 mx-auto space-y-20">
      {/* Steps */}
      <div className="relative max-w-screen-lg mx-auto mt-10 ">
        <div className="flex ml-2 h-1.5 left-1/2 -translate-x-1/2 w-[calc(100%-120px)] bg-grey-2 absolute top-7 -translate-7">
          <div className="h-full bg-grey-2 flex-1"><span className="invisible">step 2</span></div>
          <div className="h-full bg-grey-2 flex-1"><span className="invisible">step 3</span></div>
          <div className="h-full bg-grey-2 flex-1"><span className="invisible">step 4</span></div> 
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

        
          <div className="max-w-screen-xl mx-auto">
            <div className="space-y-20">
              <div className="grid grid-cols-2 gap-20">
                <div className="space-y-14">
                  <div className="space-y-10">
                  <h3 className="text-5xl text-primary font-bold">Car Parking</h3>
                  <p className="text-grey-3 text-2xl">Besides the parking, you can also choose additional services like:</p>
                  <ul className="space-y-3">
                  {car_parking.map((item, index) => {
                    return (
                      <>
                    <li className="relative flex gap-3 items-center" key={index}><span className="bg-grey-2 shrink-0 rounded-full w-6 h-6 inline-flex items-center justify-center text-primary">                   
                          <TickMark className="text-primary w-3" />            
                      
                    </span><p class="text-grey-3 text-2xl">{item.item}</p>
                    </li>
                    </>
                    );
                })}  
                     
                  </ul>
                </div>
                <div className="flex justify-start">
                  <button className="border border-grey rounded-full text-grey py-3 px-6 font-medium hover:border-primary hover:bg-primary hover:text-white ease-in-out duration-300">Select Option</button>
                </div>


                </div>
                <div className="space-y-14">
                  <div className="space-y-10">
                    <h3 className="text-5xl text-primary font-bold">Car Cleaning</h3>
                    <ul className="space-y-3">
                    {car_cleaning.map((item, index) => {
                      return (
                        <>
                      <li className="relative flex gap-3 items-center"   key={index}><span className="bg-grey-2 shrink-0 rounded-full w-6 h-6 inline-flex items-center justify-center text-primary">                   
                        <TickMark className="text-primary w-3" />
                        </span><p class="text-grey-3 text-2xl">{item.item}</p>
                      </li>
                      </>
                      );
                  })}  
                    </ul>
                  </div>
                  <div className="flex justify-start">
                  <button className="rounded-full py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300">Selected Option</button>
                </div>
                </div>
              </div>

              <div className="space-y-10">
                <h2 className="text-4xl text-grey font-semibold font-dm-sans">Choose Your Services</h2>
                <div className="grid grid-cols-3 gap-5">
                  <div className="rounded-xl py-5 px-14 flex gap-10 justify-start items-center bg-primary text-white">
                     <div className="flex justify-center items-center">
                       <CarWash className="text-white w-14" />  
                      </div><p className="text-xl font-medium">Car Wash</p>
                  </div>
                  <div className="rounded-xl py-5 px-14 flex gap-10 justify-start items-center bg-primary text-white">
                     <div className="flex justify-center items-center">
                       <InteriorCleaning className="text-white w-14" />  
                      </div><p className="text-xl font-medium">Interior Cleaning</p>
                  </div>
                  <div className="rounded-xl py-5 px-14 flex gap-10 justify-start items-center bg-primary text-white">
                     <div className="flex justify-center items-center">
                       <OilChange className="text-white w-14" />  
                      </div><p className="text-xl font-medium">Oil Change</p>
                  </div>
                  <div className="rounded-xl py-5 px-14 flex gap-10 justify-start items-center bg-grey-2 text-stone-800">
                     <div className="flex justify-center items-center">
                       <WindshieldWater className="text-stone-800 w-14" />  
                      </div><p className="text-xl font-medium">Windshield Water</p>
                  </div>
                  <div className="rounded-xl py-5 px-14 flex gap-10 justify-start items-center bg-grey-2 text-stone-800">
                     <div className="flex justify-center items-center">
                       <Ashtray className="text-stone-800 w-14" />  
                      </div><p className="text-xl font-medium">Ashtray</p>
                  </div>
                  <div className="rounded-xl py-5 px-14 flex gap-10 justify-start items-center bg-grey-2 text-stone-800">
                     <div className="flex justify-center items-center">
                       <Windshield className="text-stone-800 w-14" />  
                      </div><p className="text-xl font-medium">Windshield</p>
                  </div>
                </div>

                <div className="flex justify-end pb-5">
                  <button className="flex text-primary gap-4 font-dm-sans items-center text-xl py-2 px-4 hover:bg-primary hover:text-white rounded-md ease-in-out duration-300"><span>Next</span> <ArrowRight className="w-4" /></button>
                </div>

              </div>
            </div>
          </div>

  </div>
</section>
  );
}

export default StepOne;
