// import Icon from "./Icon";
import Edit from "../Icons/Edit";
import Calendar from "../Icons/Calendar";
import Clock from "../Icons/Clock";
import TickMark from "../Icons/TickMark";
 
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



function Profile() {
    return (    
<section>
  <div className="max-w-screen-wrap px-2 wrap:px-5 mx-auto space-y-20">
    
     <div className="grid grid-cols-2 py-10">
      {/* Column 1 */}
      <div className="space-y-10">
        <div className="flex gap-3 items-center">
          <div className="shrink-0 w-14 h-14 bg-grey-2 rounded-full overflow-hidden"></div>
          <div className="flex items-center"><h3 className="text-3xl font-semibold font-dm-sans text-stone-700">John Doe</h3></div>
        </div>

      <div className="w-full max-w-sm space-y-3">
        <div className="space-y-1">
          <p className="text-grey">E-mail Address</p>
          <div className="flex justify-between">
              <p className="text-grey text-lg font-medium">johndoe@gmail.com</p>
              <button className="text-grey rounded-full p-2 ease-in-out duration-300 hover:bg-primary hover:text-white "><Edit className="w-4" /></button>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-grey">Car Registration</p>
          <div className="flex justify-between">
              <p className="text-grey text-lg font-medium">SO 6530</p>
              <button className="text-grey rounded-full p-2 ease-in-out duration-300 hover:bg-primary hover:text-white "><Edit className="w-4" /></button>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-grey">Car Model</p>
          <div className="flex justify-between">
              <p className="text-grey text-lg font-medium">Audi A5</p>
              <button className="text-grey rounded-full p-2 ease-in-out duration-300 hover:bg-primary hover:text-white "><Edit className="w-4" /></button>
          </div>
        </div>
      </div>



      </div>

        {/* Column 1 */}
        <div className="space-y-12">
          <div className="space-y-10">
              <h3 className="text-5xl text-primary font-bold">Current Booking</h3>
              <div className="flex justify-between items-center">
                <div className="space-y-5">
                          <div className="flex justify-between">
                              <div className="flex gap-3">
                                  <Calendar className="text-stone-800 w-6 shrink-0" /> <p className="text-stone-800 text-xl font-medium">03 March 2023</p>
                              </div>
                              <button className="text-stone-800 rounded-full p-2 ease-in-out duration-300 hover:bg-primary hover:text-white hidden"><Edit className="w-6" /></button>
                          </div>
                          <div className="flex justify-between">
                              <div className="flex gap-3">
                                  <Clock className="text-stone-800 w-7 shrink-0" /> <p className="text-stone-800 text-xl font-medium">12:30 AM</p>
                              </div>
                              <button className="text-stone-800 rounded-full p-2 ease-in-out duration-300 hover:bg-primary hover:text-white hidden"><Edit className="w-4" /></button>
                          </div>
                </div>
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
                <button className="border rounded-full py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300  ">View Booking</button>
              </div> 
          </div>
        </div>

     </div>

  </div>
</section>
  );
}

export default Profile;
