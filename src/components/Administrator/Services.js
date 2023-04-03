import Layout from "../../pages/layout";
import Plus from "../Icons/Plus";
import CarWash2 from "../Icons/CarWash2";
import InteriorCleaning from "../Icons/InteriorCleaning";
import OilChange from "../Icons/OilChange";
import WindshieldWater from "../Icons/WindshieldWater";
import Ashtray from "../Icons/Ashtray"; 
import Windshield from "../Icons/Windshield";
import CarOutdoor from "../Icons/CarOutdoor";
import CarIndoor from "../Icons/CarIndoor";
import Airport from "../Icons/Airport";
function Employee() {
    return (
    <Layout>
        <section className="relative flex-1 py-5 sm:py-10">
                <div className="max-w-screen-wrap px-3 wrap:px-5 mx-auto relative z-10 w-full space-y-10">
                <div className="flex flex-wrap gap-5 items-center justify-between">
                    <h3 className="text-3xl xl:text-5xl text-primary font-bold">
                        Services
                        </h3>
                        <div class="flex justify-end">
                        <button class="rounded-full items-center flex gap-3 py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 "><Plus className={'w-5'} /><span>Add Service</span></button>
                        </div>
                    </div>
                     <div className="max-w-5xl mr-auto flex flex-col sm:grid sm:grid-cols-2 gap-5">
                        <div className="space-y-7">
                            <h3 className="text-2xl lg:text-4xl text-grey font-semibold font-dm-sans">Cleaning</h3>
                            <div className="space-y-5">
                                <div className="flex items-center gap-5">
                                    <div className="shrink-0"><CarWash2 className="w-10 text-stone-800" /></div>
                                    <div className="flex-1 lg:text-lg xl:text-xl text-stone-800 font-dm-sans font-medium">Car Wash</div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="shrink-0"><InteriorCleaning className="w-10 text-stone-800" /></div>
                                    <div className="flex-1 lg:text-lg xl:text-xl text-stone-800 font-dm-sans font-medium">Interior Cleaning</div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="shrink-0"><OilChange className="w-10 text-stone-800" /></div>
                                    <div className="flex-1 lg:text-lg xl:text-xl text-stone-800 font-dm-sans font-medium">Oil Change</div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="shrink-0"><WindshieldWater className="w-10 text-stone-800" /></div>
                                    <div className="flex-1 lg:text-lg xl:text-xl text-stone-800 font-dm-sans font-medium">Windshield Water</div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="shrink-0"><Ashtray className="w-10 text-stone-800" /></div>
                                    <div className="flex-1 lg:text-lg xl:text-xl text-stone-800 font-dm-sans font-medium">Ashtray</div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="shrink-0"><Windshield className="w-10 text-stone-800" /></div>
                                    <div className="flex-1 lg:text-lg xl:text-xl text-stone-800 font-dm-sans font-medium">Windshield</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-7">
                            <h3 className="text-2xl lg:text-4xl text-grey font-semibold font-dm-sans">Parking</h3>
                            <div className="space-y-5">
                                <div className="flex items-center gap-5">
                                    <div className="shrink-0"><CarOutdoor className="w-10 text-stone-800" /></div>
                                    <div className="flex-1 lg:text-lg xl:text-xl text-stone-800 font-dm-sans font-medium">Outdoor Parking</div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="shrink-0"><CarIndoor className="w-10 text-stone-800" /></div>
                                    <div className="flex-1 lg:text-lg xl:text-xl text-stone-800 font-dm-sans font-medium">Indoor Parking</div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="shrink-0"><Airport className="w-10 text-stone-800" /></div>
                                    <div className="flex-1 lg:text-lg xl:text-xl text-stone-800 font-dm-sans font-medium">Airport Transfer</div>
                                </div> 
                            </div>
                        </div>
                     </div>
                </div>
        </section>
    </Layout>
  );
}

export default Employee;