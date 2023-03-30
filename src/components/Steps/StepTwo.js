// import Icon from "./Icon";
import Layout from "../../pages/layout";
import ArrowRight from "../Icons/ArrowRight";
import { Link } from "react-router-dom";
const steps = [
  {
    title: "Step 1",
    subtitle: "Choose your services",
    active: true,
  },
  {
    title: "Step 2",
    subtitle: "Select Date & Time",
    active: true,
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
];

function StepTwo() {
  return (
    <Layout>
      <section>
        <div className="max-w-screen-wrap px-2 wrap:px-5 mx-auto space-y-20">
          {/* Steps */}
          <div className="relative max-w-screen-lg mx-auto mt-10 ">
            <div className="flex ml-2 h-1.5 left-1/2 -translate-x-1/2 w-[calc(100%-120px)] bg-grey-2 absolute top-7 -translate-7">
              <div className="h-full bg-primary w-1/3">
                <span className="invisible">steps</span>
              </div>
            </div>
            <div className="flex justify-between gap-2 relative z-10">
              {steps.map((step, index) => {
                return (
                  <>
                    <div
                      className="space-y-2 flex flex-col justify-center items-center"
                      key={index}
                    >
                      <div
                        className={`rounded-full  w-14 h-14 relative top-0.5 ${
                          step.active ? "bg-primary" : "bg-grey-2"
                        }`}
                      ></div>
                      <p
                        className={`text-grey text-center font-dm-sans ${
                          step.active ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <strong className="block font-semibold">
                          {step.title}
                        </strong>
                        <span className="text-sm">{step.subtitle}</span>
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {/* Step-1 content */}

          <div className="max-w-screen-lg mx-auto">
            <div className="space-y-20">
              <div className="grid grid-cols-2 gap-20">
                <div className="space-y-14">
                  <input
                    type="datetime-local"
                    className="w-full border border-black/20 py-2 px-3 outline-none focus:border-primary rounded"
                  />
                </div>
                <div className="space-y-14">
                  <div className="space-y-10">
                    <h3 className="text-5xl text-primary font-bold">
                      Booking Summary
                    </h3>
                    <ul className="space-y-4">
                      <li className="justify-between flex text-grey-3 text-2xl ">
                        <p>Car Wash</p>
                        <p>
                          <sup className="text-sm">CHF</sup>70
                        </p>
                      </li>
                      <li className="justify-between flex text-grey-3 text-2xl">
                        <p>Interior Cleaning</p>
                        <p>
                          <sup className="text-sm">CHF</sup>70
                        </p>
                      </li>
                      <li className="justify-between flex text-grey-3 text-2xl">
                        <p>Oil change</p>
                        <p>
                          <sup className="text-sm">CHF</sup>70
                        </p>
                      </li>
                      <li className="justify-between flex text-grey-3 text-2xl font-semibold">
                        <p>Total</p>
                        <p>
                          <sup className="text-sm">CHF</sup>210
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="flex justify-between pb-5">
                <Link to="/step-1" className="flex text-primary gap-4 font-dm-sans items-center text-xl py-2 px-4 hover:bg-primary hover:text-white rounded-md ease-in-out duration-300 group">
                    <ArrowRight className="w-4 rotate-180" />
                    <span className="text-grey group-hover:text-white ease-in-out duration-300">
                      Previous
                    </span>
                  </Link>
                  <Link to="/step-3" className="flex text-primary gap-4 font-dm-sans items-center text-xl py-2 px-4 hover:bg-primary hover:text-white rounded-md ease-in-out duration-300">
                    <span>Next</span> <ArrowRight className="w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default StepTwo;
