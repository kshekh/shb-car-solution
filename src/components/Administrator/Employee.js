import Layout from "../../pages/layout";
import Plus from "../Icons/Plus";
import Angle from "../Icons/Angle";
function Employee() {
    return (
    <Layout>
        <section className="relative flex-1 py-10">
                <div className="max-w-screen-wrap px-3 wrap:px-5 mx-auto relative z-10 w-full space-y-5 sm:space-y-16">
                    <div className="flex flex-wrap gap-5 items-center justify-between">
                    <h3 className="text-3xl xl:text-5xl text-primary font-bold">
                        Employees
                        </h3>
                        <div class="flex justify-end">
                        <button class="rounded-full items-center flex gap-3 py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 "><Plus className={'w-5'} /><span>Add an Employee</span></button>
                        </div>
                    </div>
                    <div className="max-w-screen-xl mr-auto">
                    <div className="pt-5 sm:pt-10 sm:pb-32 overflow-hidden">
                <div class="overflow-x-auto  ">
                  <div class="inline-block min-w-full py-2 align-middle ">
                    <table className="w-full xl:table-fixed">
                   
                    <thead>
                      <th className="whitespace-nowrap px-3 text-left text-xl text-stone-800 font-dm-sans uppercase">Name</th>
                      <th className="whitespace-nowrap px-3 text-left text-xl text-stone-800 font-dm-sans uppercase">E-MAIL</th>
                      <th className="whitespace-nowrap px-3 text-left text-xl text-stone-800 font-dm-sans uppercase">EMPLOYEE NO.</th>
                      <th className="whitespace-nowrap px-3 text-left text-xl text-stone-800 font-dm-sans uppercase">Status</th>
                      <th className="whitespace-nowrap px-3 text-left text-xl text-stone-800 font-dm-sans uppercase">WORKING HOURS</th> 
                    </thead>
                    <tbody>
                      <tr>
                        <td className="whitespace-nowrap px-3 text-left text-stone-800 font-dm-sans">Dario Schweizer</td>
                        <td className="whitespace-nowrap px-3 text-left text-grey font-dm-sans">dario.s@gmail.com</td>
                        <td className="whitespace-nowrap px-3 text-left text-grey font-dm-sans">2985</td>
                        <td className="whitespace-nowrap px-3 text-left text-grey font-dm-sans">At work</td> 
                        <td className="whitespace-nowrap px-3 text-left py-3"><button class="rounded-full py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 ">View Time Tracking</button></td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-3 text-left text-stone-800 font-dm-sans">Hans Mustermann</td>
                        <td className="whitespace-nowrap px-3 text-left text-grey font-dm-sans">hansmus@gmail.com</td>
                        <td className="whitespace-nowrap px-3 text-left text-grey font-dm-sans">2987</td>
                        <td className="whitespace-nowrap px-3 text-left text-grey font-dm-sans">Absent</td> 
                        <td className="whitespace-nowrap px-3 text-left py-3"><button class="rounded-full py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 ">View Time Tracking</button></td>
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

export default Employee;