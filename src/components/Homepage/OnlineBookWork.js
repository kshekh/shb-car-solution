 import workstep1 from '../../assets/images/work-step-1.svg'
 import workstep2 from '../../assets/images/work-step-2.svg'
 import workstep3 from '../../assets/images/work-step-3.svg'



 const steps = [
    {
      title: "Step 1",
      subtitle: "Choose the service that you need",
      descrp: "From wash service and maintenance to car parking and airport transfer, we have a service to match your needs.",
      thumb: workstep1,
    },  {
      title: "Step 2",
      subtitle: "Pick a date and time",
      descrp: "Choose a drop off and pick up date from the calendar that suits you",
      thumb: workstep2,
    },  {
      title: "Step 3",
      subtitle: "Payment and confirmation",
      descrp: "Pay online and you’ll receive an email/SMS confirmation with a QR code which will be scanned when you arrive at SHB.",
      thumb: workstep3,
    },
     
  ];



function OnlineBookWork() {
    return (
      <>   
         <section className="relative z-10 bg-warm-gray-800 py-28">
            <div className="max-w-screen-wrap px-2 wrap:px-5 mx-auto">
                <div className="space-y-3">
                  <div className="relative space-y-20">
                    <h2 className="text-4xl font-semibold text-white">How Online Booking Works</h2>
                    <div className="grid grid-cols-3 gap-20">
                    {steps.map((setp, index) => {
                    return (
                        <div className="space-y-14" key={index}>
                            <div className="space-y-3">
                            <h3 className="text-3xl font-medium text-white">{setp.title}</h3>
                            <p className="text-2xl font-medium text-white">{setp.subtitle}</p>
                            <p class="text-white text-lg">{setp.descrp}</p>
                            </div>
                            <div className="flex justify-center items-center">
                                    <img src={setp.thumb} alt="workstep1" />
                            </div>
                        </div>
                        );
                    })}                        
                    </div>
                    </div>

                  <div className="flex justify-center items-center">
                    <button className="rounded-full bg-primary text-white py-3 px-8 font-dm-sans text-xl">Book Online Now</button>
                  </div>
                </div>
            </div>
         </section>
       </>
      );
    }   
    
    export default OnlineBookWork;

    