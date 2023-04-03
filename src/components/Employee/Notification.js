import Layout from "../../pages/layout";
import Bell from "../Icons/Bell";
function TodayVehicles() {
    return (
        <Layout>
            <section className="py-5 sm:py-10 flex-1">
                <div className="max-w-screen-wrap px-3 wrap:px-5 mx-auto relative z-10  w-full">
                <h3 className="text-3xl xl:text-5xl text-primary font-bold">
                        Notifications (2)
                    </h3>
                    <div className="py-5 space-y-5">
                        <div className="bg-grey-2 rounded-2xl py-3 px-5 flex flex-wrap gap-3 justify-between items-center">
                            <div className="font-dm-sans text-xl flex items-center gap-4"><div className="shrink-0 w-7"><Bell className="w-7 text-primary" /></div><p><b className="font-semibold">Nadia</b> Frei will drop off <b className="font-semibold">BMW X5</b> tomorrow at <b className="font-semibold">10:30</b></p> </div>
                            <div className="flex items-center"><button class="border rounded-full py-2 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300  ">View Details</button></div>
                        </div>
                        <div className="bg-grey-2 rounded-2xl py-3 px-5 flex flex-wrap gap-3 justify-between items-center">
                            <div className="font-dm-sans text-xl flex items-center gap-4"><div className="shrink-0 w-7"><Bell className="w-7 text-primary" /></div><p><b className="font-semibold">Nadia</b> Frei will drop off <b className="font-semibold">BMW X5</b> tomorrow at <b className="font-semibold">10:30</b></p> </div>
                            <div className="flex items-center"><button class="border rounded-full py-2 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300  ">View Details</button></div>
                        </div>
                        <div className="bg-grey-2 rounded-2xl py-3 px-5 flex flex-wrap gap-3 justify-between items-center">
                            <div className="font-dm-sans text-xl flex items-center gap-4"><div className="shrink-0 w-7"><Bell className="w-7 text-primary" /></div><p><b className="font-semibold">Nadia</b> Frei will drop off <b className="font-semibold">BMW X5</b> tomorrow at <b className="font-semibold">10:30</b></p> </div>
                            <div className="flex items-center"><button class="border rounded-full py-2 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300  ">View Details</button></div>
                        </div>
                        <div className="bg-grey-2 rounded-2xl py-3 px-5 flex flex-wrap gap-3 justify-between items-center">
                            <div className="font-dm-sans text-xl flex items-center gap-4"><div className="shrink-0 w-7"><Bell className="w-7 text-primary" /></div><p><b className="font-semibold">Nadia</b> Frei will drop off <b className="font-semibold">BMW X5</b> tomorrow at <b className="font-semibold">10:30</b></p> </div>
                            <div className="flex items-center"><button class="border rounded-full py-2 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300  ">View Details</button></div>
                        </div>
                        <div className="bg-grey-2 rounded-2xl py-3 px-5 flex flex-wrap gap-3 justify-between items-center">
                            <div className="font-dm-sans text-xl flex items-center gap-4"><div className="shrink-0 w-7"><Bell className="w-7 text-primary" /></div><p><b className="font-semibold">Nadia</b> Frei will drop off <b className="font-semibold">BMW X5</b> tomorrow at <b className="font-semibold">10:30</b></p> </div>
                            <div className="flex items-center"><button class="border rounded-full py-2 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300  ">View Details</button></div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
  );
}

export default TodayVehicles;