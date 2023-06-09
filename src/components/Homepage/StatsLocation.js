 import map from '../../assets/images/MapsicleMap.png'
 import { Link } from "react-router-dom";
function StatsLocation() {
    return (
      <>   
         <section className="relative z-10 -mb-20">
            <div className="max-w-screen-wrap px-3 wrap:px-5 mx-auto">
                <div className="relative">
                   <div className="md:grid md:grid-cols-2 flex flex-col gap-5 md:gap-10 xl:gap-20 py-10 xl:py-20">
                        <div className="bg-black/10 flex flex-col rounded-2xl p-5 xl:p-14">
                            <p className="lg:text-lg xl:text-2xl flex-1">At our car washing service, we know that your car is more than just a mode of transportation - it's a part of your life. That's why we take great care in providing top-quality car washing services that will leave your car looking like new. Our team of experienced professionals uses only the best products and techniques to ensure that your car receives the care it deserves. From exterior washes to full detailing, we offer a range of services to meet your car care needs.</p>
                            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2 xl:gap-5 pt-5 xl:pt-10">
                            <Link to="/step-1" className="rounded-full bg-primary text-white py-2 px-8 font-dm-sans xl:text-xl">Book Online Now</Link>
                                <button className="rounded-full border-grey border py-2 px-8 font-dm-sans xl:text-xl text-grey ease-in-out duration-300 hover:text-white hover:bg-primary hover:border-primary">Explore Services</button>
                            </div>
                        </div>

                        <div className="space-y-5 xl:space-y-10 pt-4">
                            <h2 className="text-4xl font-semibold text-primary">Our Location</h2>
                            <div className="overflow-hidden rounded-2xl">
                                <img src={map} alt="map" className="w-full" />
                            </div>
                           
                        </div>


                   </div> 


                   <div className="md:grid md:grid-cols-3 flex flex-col gap-5">
                    <div className="bg-stone-800 rounded-xl text-white flex justify-start items-center">
                        <div className="space-y-4 p-10">
                            <h4 className="text-3xl lg:text-5xl leading-none font-medium">10</h4>
                            <p className="lg:text-xl leading-none">Employees</p>
                        </div>
                    </div>
                    <div className="bg-stone-800 rounded-xl text-white flex justify-start items-center">
                        <div className="space-y-4 p-10">
                            <h4 className="text-3xl lg:text-5xl leading-none font-medium">20,000</h4>
                            <p className="lg:text-xl leading-none">Cars cleaned in 2022</p>
                        </div>
                    </div>
                    <div className="bg-stone-800 rounded-xl text-white flex justify-start items-center">
                        <div className="space-y-4 p-10">
                            <h4 className="text-3xl lg:text-5xl leading-none font-medium">100<sup>%</sup></h4>
                            <p className="lg:text-xl leading-none">Customer satisfaction</p>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
         </section>
       </>
      );
    }
    
    
    export default StatsLocation;

    