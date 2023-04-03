// import Icon from "./Icon";
 
import Layout from "../../pages/layout";
import Angle from "../Icons/Angle";
import CarWash from "../Icons/CarWash";
import InteriorCleaning from "../Icons/InteriorCleaning";
import OilChange from "../Icons/OilChange";
import Cross from "../Icons/Cross";
import Scanner from "../Icons/Scanner";
function TodayVehicles() {
  return (
    <Layout>
      <section className="relative flex-1">
          <div className="relative">
             <div className="max-w-screen-wrap px-3 wrap:px-5 mx-auto relative z-10  w-full">
               <div className="max-w-screen-xl py-3 2xl:p-10 2xl:pl-0  ">
                <div className="flex flex-wrap gap-5 items-center justify-between">
                  <h3 className="text-3xl xl:text-5xl text-primary font-bold">
                    Today’s Vehicles (7)
                  </h3>
                  <div class="flex justify-end">
                    <button class="border border-grey rounded-full text-grey py-3 px-6 font-medium hover:border-primary hover:bg-primary hover:text-white ease-in-out duration-300 ">Add New Vehicle</button>
                  </div>
                </div>

                <div className="pt-5 sm:pt-10 sm:pb-32 overflow-hidden">
                <div class="overflow-x-auto  ">
                  <div class="inline-block min-w-full py-2 align-middle ">
                    <table className="w-full xl:table-fixed">
                      <thead>
                        <th className="text-left text-xl text-stone-800 font-dm-sans whitespace-nowrap px-3">Customer Name</th>
                        <th className="text-left text-xl text-stone-800 font-dm-sans whitespace-nowrap px-3">Licence Plate</th>
                        <th className="text-left text-xl text-stone-800 font-dm-sans whitespace-nowrap px-3">Model</th>
                        <th className="text-left text-xl text-stone-800 font-dm-sans whitespace-nowrap px-3">Time</th>
                        <th className="text-left text-xl text-stone-800 font-dm-sans whitespace-nowrap px-3">Status</th>
                        <th className="text-right text-xl text-stone-800 font-dm-sans whitespace-nowrap px-3"></th>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-left text-stone-800 font-dm-sans px-3 whitespace-nowrap">Dario Schweizer</td>
                          <td className="text-left text-grey font-dm-sans px-3">SO 6530</td>
                          <td className="text-left text-grey font-dm-sans px-3">Audi A5</td>
                          <td className="text-left text-grey font-dm-sans px-3">09:00</td>
                          <td className="text-left text-green-500 px-3 font-dm-sans"><div className="flex gap-1"><Angle className="w-3" /><span>FINISHED</span></div></td>
                          <td className="text-right py-3 px-3"><button class="rounded-full py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 whitespace-nowrap ">Add New Vehicle</button></td>
                        </tr>
                        <tr>
                          <td className="text-left text-stone-800 font-dm-sans px-3 whitespace-nowrap">Dario Schweizer</td>
                          <td className="text-left text-grey font-dm-sans px-3">SO 6530</td>
                          <td className="text-left text-grey font-dm-sans px-3">Audi A5</td>
                          <td className="text-left text-grey font-dm-sans px-3">09:00</td>
                          <td className="text-left text-green-500 px-3 font-dm-sans"><div className="flex gap-1"><Angle className="w-3" /><span>FINISHED</span></div></td>
                          <td className="text-right py-3 px-3"><button class="rounded-full py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 whitespace-nowrap ">Add New Vehicle</button></td>
                        </tr>
                        <tr>
                          <td className="text-left text-stone-800 font-dm-sans px-3 whitespace-nowrap">Dario Schweizer</td>
                          <td className="text-left text-grey font-dm-sans px-3">SO 6530</td>
                          <td className="text-left text-grey font-dm-sans px-3">Audi A5</td>
                          <td className="text-left text-grey font-dm-sans px-3">09:00</td>
                          <td className="text-left text-stone-500 px-3 font-dm-sans"><div className="flex gap-1"><Angle className="w-3" /><span className=" whitespace-nowrap">IN PROGRESS</span></div></td>
                          <td className="text-right py-3 px-3"><button class="rounded-full py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 whitespace-nowrap ">Add New Vehicle</button></td>
                        </tr>
                        <tr>
                          <td className="text-left text-stone-800 font-dm-sans px-3 whitespace-nowrap">Dario Schweizer</td>
                          <td className="text-left text-grey font-dm-sans px-3">SO 6530</td>
                          <td className="text-left text-grey font-dm-sans px-3">Audi A5</td>
                          <td className="text-left text-grey font-dm-sans px-3">09:00</td>
                          <td className="text-left text-stone-400 px-3 font-dm-sans"><div className="flex gap-1"><Angle className="w-3" /><span>CONFIRMED</span></div></td>
                          <td className="text-right py-3 px-3"><button class="rounded-full py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 whitespace-nowrap ">Add New Vehicle</button></td>
                        </tr>
                        <tr>
                          <td className="text-left text-stone-800 font-dm-sans px-3 whitespace-nowrap">Dario Schweizer</td>
                          <td className="text-left text-grey font-dm-sans px-3">SO 6530</td>
                          <td className="text-left text-grey font-dm-sans px-3">Audi A5</td>
                          <td className="text-left text-grey font-dm-sans px-3">09:00</td>
                          <td className="text-left text-stone-400 px-3 font-dm-sans"><div className="flex gap-1"><Angle className="w-3" /><span>CONFIRMED</span></div></td>
                          <td className="text-right py-3 px-3"><button class="rounded-full py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 whitespace-nowrap ">Add New Vehicle</button></td>
                        </tr>
                        <tr>
                          <td className="text-left text-stone-800 font-dm-sans px-3 whitespace-nowrap">Dario Schweizer</td>
                          <td className="text-left text-grey font-dm-sans px-3">SO 6530</td>
                          <td className="text-left text-grey font-dm-sans px-3">Audi A5</td>
                          <td className="text-left text-grey font-dm-sans px-3">09:00</td>
                          <td className="text-left text-stone-400 px-3 font-dm-sans"><div className="flex gap-1"><Angle className="w-3" /><span>CONFIRMED</span></div></td>
                          <td className="text-right py-3 px-3"><button class="rounded-full py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 whitespace-nowrap ">Add New Vehicle</button></td>
                        </tr>
                        <tr>
                          <td className="text-left text-stone-800 font-dm-sans px-3 whitespace-nowrap">Dario Schweizer</td>
                          <td className="text-left text-grey font-dm-sans px-3">SO 6530</td>
                          <td className="text-left text-grey font-dm-sans px-3">Audi A5</td>
                          <td className="text-left text-grey font-dm-sans px-3">09:00</td>
                          <td className="text-left text-stone-400 px-3 font-dm-sans"><div className="flex gap-1"><Angle className="w-3" /><span>CONFIRMED</span></div></td>
                          <td className="text-right py-3 px-3"><button class="rounded-full py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 whitespace-nowrap ">Add New Vehicle</button></td>
                        </tr>
                        <tr>
                          <td className="text-left text-stone-800 font-dm-sans px-3 whitespace-nowrap">Dario Schweizer</td>
                          <td className="text-left text-grey font-dm-sans px-3">SO 6530</td>
                          <td className="text-left text-grey font-dm-sans px-3">Audi A5</td>
                          <td className="text-left text-grey font-dm-sans px-3">09:00</td>
                          <td className="text-left text-stone-400 px-3 font-dm-sans"><div className="flex gap-1"><Angle className="w-3" /><span>CONFIRMED</span></div></td>
                          <td className="text-right py-3 px-3"><button class="rounded-full py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 whitespace-nowrap ">Add New Vehicle</button></td>
                        </tr>
                        <tr>
                          <td className="text-left text-stone-800 font-dm-sans px-3 whitespace-nowrap">Dario Schweizer</td>
                          <td className="text-left text-grey font-dm-sans px-3">SO 6530</td>
                          <td className="text-left text-grey font-dm-sans px-3">Audi A5</td>
                          <td className="text-left text-grey font-dm-sans px-3">09:00</td>
                          <td className="text-left text-stone-400 px-3 font-dm-sans"><div className="flex gap-1"><Angle className="w-3" /><span>CONFIRMED</span></div></td>
                          <td className="text-right py-3 px-3"><button class="rounded-full py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 whitespace-nowrap ">Add New Vehicle</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  </div>
                </div>


               </div>
             </div> 
          </div> 

          {/* Please active as per requirement its hidden at mobile */}
          <div className="2xl:bg-grey/10 bg-grey-2 z-50 hidden xl:flex flex-col fixed 2xl:absolute right-0 inset-y-0 w-full max-w-md p-5 xl:p-10 space-y-10 overflow-auto max-h-screen 2xl:max-h-none">
            <div className="flex justify-between">
              <h3 className="text-5xl text-grey font-bold">
                Details
              </h3>
              <button>
                <Cross className={'w-7 text-grey'} />
              </button>
            </div>
            <div className="space-y-5 flex-1">
                <div className="space-y-2">
                  <p class="text-stone-800 font-dm-sans font-medium">Customer Name</p>
                  <p class="text-stone-800 font-dm-sans text-lg font-semibold">Noah Steiner</p>
                </div>
                <div className="space-y-2">
                  <p class="text-stone-800 font-dm-sans font-medium">E-mail Address</p>
                  <p class="text-stone-800 font-dm-sans text-lg font-semibold">n.steiner@gmail.com</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <p class="text-stone-800 font-dm-sans font-medium">Car Registration</p>
                  <p class="text-stone-800 font-dm-sans text-lg font-semibold">SO 6530</p>
                </div>
                <div className="space-y-2">
                  <p class="text-stone-800 font-dm-sans font-medium">Car Model</p>
                  <p class="text-stone-800 font-dm-sans text-lg font-semibold">Audi A5</p>
                </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <p class="text-stone-800 font-dm-sans font-medium">Time</p>
                  <p class="text-stone-800 font-dm-sans text-lg font-semibold">11:30</p>
                </div>
                <div className="space-y-2">
                  <p class="text-stone-800 font-dm-sans font-medium">Date</p>
                  <p class="text-stone-800 font-dm-sans text-lg font-semibold">07.03.2023</p>
                </div>
                </div>
                <div className="space-y-3">
                  <p class="text-stone-800 font-dm-sans font-medium">Services</p>
                 <div className="space-y-3">
                  <label className="flex items-center gap-5" for="CarWash">
                    <input type="checkbox" id="CarWash" className="w-5 h-5 border-2 border-grey/50 bg-transparent rounded text-primary ring-primary focus:ring-primary" /> 
                    <div className="px-2"><CarWash className={'w-10 text-stone-800'} /></div>
                    <div className="text-stone-800 font-dm-sans text-lg font-semibold">Car Wash</div>
                   </label>
                  <label className="flex items-center gap-5" for="InteriorCleaning">
                    <input type="checkbox" id="InteriorCleaning" className="w-5 h-5 border-2 border-grey/50  bg-transparent rounded text-primary ring-primary focus:ring-primary" /> 
                    <div className="px-2"><InteriorCleaning className={'w-10 text-stone-800'} /></div>
                    <div className="text-stone-800 font-dm-sans text-lg font-semibold">Interior Cleaning</div>
                   </label>
                  <label className="flex items-center gap-5" for="OilChange">
                    <input type="checkbox" id="OilChange" className="w-5 h-5 border-2 border-grey/50 bg-transparent rounded text-primary ring-primary focus:ring-primary" /> 
                    <div className="px-2"><OilChange className={'w-10 text-stone-800'} /></div>
                    <div className="text-stone-800 font-dm-sans text-lg font-semibold">Oil Change</div>
                   </label>
                 </div>
                 
                </div>

            </div>

            <div className="py-10">
              <button class="rounded-full items-center flex gap-3 py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 "><Scanner className={'w-5'} /><span>Scan QR Code</span></button>
            </div>             

          </div>
      </section>
    </Layout>
  );
}

export default TodayVehicles;