import Layout from "../../pages/layout";
import Edit from "../Icons/Edit";
import Arrive from "../Icons/Arrive";
import Leave from "../Icons/Leave";
import Pause from "../Icons/Pause";
import Calendar from "../Icons/Calendar";
function TodayVehicles() {
    return (
        <Layout>
            <section className="flex-1 relative">
                <div className="absolute inset-0 hidden lg:grid grid-cols-2">
                    <div className="flex-1"></div>
                    <div className="flex-1 bg-grey-2"></div>
                </div>


                <div className="max-w-screen-wrap px-3 wrap:px-5 mx-auto relative z-10  w-full">
                    <div className="lg:grid lg:grid-cols-2">
                        <div className="lg:p-10 lg:pl-0 space-y-5 lg:space-y-10 pt-5">
                            <div class="flex gap-3 items-center">
                                    <div class="shrink-0 w-14 h-14 bg-grey-2 rounded-full overflow-hidden"></div>                        
                                <div class="flex flex-col ">
                                    <h3 class="text-xl md:text-3xl font-semibold font-dm-sans text-stone-700">Hans Mustermann</h3>
                                    <p className="text-xs text-left text-grey font-medium">Employee</p>
                                </div>
                            </div>
                            <div className="space-y-1 max-w-xs">
                                <p className="text-grey">E-mail Address</p>
                                <div className="flex justify-between">
                                    <p className="text-grey text-lg font-medium">
                                    johndoe@gmail.com
                                    </p>
                                    <button className="text-grey rounded-full p-2 ease-in-out duration-300 hover:bg-primary hover:text-white ">
                                    <Edit className="w-4" />
                                    </button>
                                </div>
                            </div>


                        <h3 className="text-2xl md:text-4xl text-grey font-semibold">
                            Time Tracking
                        </h3>
                        <div className="max-w-md">
                        <p className="text-2xl md:text-3xl text-grey font-semibold text-center">
                        03:19:38
                        </p>

                            <div className="grid grid-cols-2 gap-4 py-6">
                                <button className="bg-grey-2 text-stone-800 py-4 px-5 justify-center rounded-xl flex gap-5 items-center"><Arrive className={'w-8 text-green-500'} /><span>Arrive</span></button>
                                <button className="bg-grey-2 text-stone-800 py-4 px-5 justify-center rounded-xl flex gap-5 items-center"><Leave className={'w-10 text-red-500'} /><span>Leave</span></button>
                                <button className="bg-grey-2 text-stone-800 py-4 px-5 justify-center rounded-xl flex gap-5 items-center col-span-2"><Pause className={'w-8 text-stone-800'} /><span>Pause</span></button>
                            </div>
                        </div>

                        </div>
                        <div className="lg:p-10 lg:pr-0 p-5 -mx-3 lg:mx-0 bg-grey-2 lg:bg-transparent">
                            <div className="flex flex-wrap gap-4 justify-between">
                                <h3 className="text-4xl text-stone-800 font-bold">
                                   Overview
                                </h3>
                                <button class="rounded-full flex gap-3 py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 "><Calendar className={'w-5'} /><span>07.02.2023 - 07.03.2023</span></button>
                            </div>


                            <div class="overflow-x-auto pt-4 ">
                  <div class="inline-block min-w-full py-2 align-middle ">
                    <table className="w-full xl:table-fixed">

                    <thead>
                      <th className="px-3 text-left whitespace-nowrap text-xl text-stone-800 font-dm-sans uppercase">DATE</th>
                      <th className="px-3 text-left whitespace-nowrap text-xl text-stone-800 font-dm-sans uppercase">HOURS</th>
                      <th className="px-3 text-left whitespace-nowrap text-xl text-stone-800 font-dm-sans uppercase">total time</th>
                      <th className="px-3 text-left whitespace-nowrap text-xl text-stone-800 font-dm-sans uppercase">pause</th> 
                      <th className="px-3 text-left whitespace-nowrap text-xl text-stone-800 font-dm-sans uppercase">work</th> 
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-stone-800 font-dm-sans">01.03.2023</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">06:00-15:00</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">9.0h</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">1.0h</td> 
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">8.0h</td> 
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-stone-800 font-dm-sans">01.03.2023</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">06:00-15:00</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">9.0h</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">1.0h</td> 
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">8.0h</td> 
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-stone-800 font-dm-sans">01.03.2023</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">06:00-15:00</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">9.0h</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">1.0h</td> 
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">8.0h</td> 
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-stone-800 font-dm-sans">01.03.2023</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">06:00-15:00</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">9.0h</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">1.0h</td> 
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">8.0h</td> 
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-stone-800 font-dm-sans">01.03.2023</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">06:00-15:00</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">9.0h</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">1.0h</td> 
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">8.0h</td> 
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-stone-800 font-dm-sans">01.03.2023</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">06:00-15:00</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">9.0h</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">1.0h</td> 
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">8.0h</td> 
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-stone-800 font-dm-sans">01.03.2023</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">06:00-15:00</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">9.0h</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">1.0h</td> 
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">8.0h</td> 
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-stone-800 font-dm-sans">01.03.2023</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">06:00-15:00</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">9.0h</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">1.0h</td> 
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">8.0h</td> 
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-stone-800 font-dm-sans">01.03.2023</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">06:00-15:00</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">9.0h</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">1.0h</td> 
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">8.0h</td> 
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-stone-800 font-dm-sans">01.03.2023</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">06:00-15:00</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">9.0h</td>
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">1.0h</td> 
                        <td className="px-3 py-2 whitespace-nowrap text-left text-grey font-dm-sans">8.0h</td> 
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
                </div>

                        </div>
                    </div>
                </div>
            </section>
        </Layout>
  );
}

export default TodayVehicles;