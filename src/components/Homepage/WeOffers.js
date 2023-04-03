 import offerBg from '../../assets/images/offer-bg.png'
 import thumb1 from '../../assets/images/offer-thumb-1.png'
 import thumb2 from '../../assets/images/offer-thumb-2.png'

 const offers = [
  {
    title: "Car parking and airport transfer",
     descrp: "We’ll keep your car safe while you are away. If you happen to be flying somewhere, we are more than happy to transport you to the airport and pick you up when you are back.",
    thumb: thumb1,
  },  {
    title: "Car cleaning and maintenance",
     descrp: "Not only will we make sure your car is spotless from inside-out, we will also take care of the car oil and the window water.",
    thumb: thumb2,
  }, 
   
];

function WeOffers() {
    return (
      <>   
         <section className="relative pt-32 xl:pt-60 pb-10 xl:pb-24 flex items-center overflow-hidden">
            <div className="absolute inset-0">
            <img src={offerBg} alt="offer bg" className="min-w-full min-h-full max-w-none" />
            </div>
            <div className="max-w-screen-wrap px-3 wrap:px-5 mx-auto relative z-10 space-y-10 w-full">
            <h2 className="text-4xl font-semibold text-white">How Online Booking Works</h2>
              <div className="md:grid md:grid-cols-2 flex flex-col gap-8 md:gap-5 xl:gap-10 items-center">
              {offers.map((offer, index) => {
                    return (
                      <>
                     <div className="space-y-4 pr-20" key={index}>
                      <h3 className="text-4xl text-white font-medium">{offer.title}</h3>
                      <p className="text-white text-2xl pb-3">{offer.descrp}</p>
                      <button className="rounded-full bg-primary text-white py-2 px-8 font-dm-sans text-xl">Book Online Now</button>
                    </div>
                      <div className="overflow-hidden rounded-2xl">
                        <img src={offer.thumb} alt="thumb1" className="w-full aspect-auto" /> 
                      </div>
                    </>
                      );
                    })}



                    
 
              </div>
            </div>

         </section>
       </>
      );
    }
    
    
    export default WeOffers;

    