// import Icon from "./Icon";
import ArrowRight from "../Icons/ArrowRight";
import Clock from "../Icons/Clock";
import Edit from "../Icons/Edit";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Layout from "../../pages/layout";

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
    subtitle: "Customer Details",
    active: true,
  },
  {
    title: "Step 4",
    subtitle: "Payment",
    active: false,
  },
];

function StepThree() {
  const [selected, setSelected] = useState("billingAddress");
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <Layout>
      <section>
        <div className="max-w-screen-wrap px-3 wrap:px-5 mx-auto space-y-10 sm:space-y-20">
           {/* Steps */}
           <div className="relative max-w-screen-lg mx-auto mt-5 xs:mt-10 ">
           <div className="flex sm:ml-2 h-1.5 left-1/2 -translate-x-1/2 w-[calc(100%-100px)] sm:w-[calc(100%-120px)] bg-grey-2 absolute top-7">
                  <div className="h-full bg-primary w-3/4">
                  <span className="invisible">steps</span>
                </div>
            </div>
            <div className="flex justify-between items-start gap-2 relative z-10">
              {steps.map((step, index) => {
                return (
                  <>
                    <div
                      className="space-y-2 flex flex-col justify-center items-center w-32 lg:w-auto"
                      key={index}
                    >
                      <div
                        className={`rounded-full w-10 h-10 lg:w-14 lg:h-14 relative top-3 lg:top-0.5 ${
                          step.active ? "bg-primary" : "bg-grey-2"
                        }`}
                      ></div>
                      <p
                        className={`text-grey lg:text-center font-dm-sans text-left pt-3 ${
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
            <div className="space-y-10 md:space-y-20">
              <div className="md:grid md:grid-cols-2 flex flex-col gap-5 md:gap-10 lg:gap-20">
                <div className="space-y-10">
                  {/* Have an Account */}
                  <div className="space-y-4">
                    <div className="flex gap-3 items-center">
                      <input
                        name="account"
                        type="radio"
                        checked={selected === "have-an-account"}
                        value="have-an-account"
                        onChange={handleChange}
                        id="have-an-account"
                        className="w-4 border-2 border-grey/50 text-primary ring-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="have-an-account"
                        className="text-xl text-grey font-medium"
                      >
                        I Have an Account
                      </label>
                    </div>

                    <div
                      className={`space-y-5 ${
                        selected === "have-an-account" ? "" : "hidden"
                      }`}
                      aria-hidden={
                        selected !== "have-an-account" ? true : false
                      }
                    >
                      <div className="space-y-3">
                        <input
                          type="email"
                          className="w-full border border-grey rounded-full py-3 px-5 text-grey placeholder-grey hover:border-primary focus:border-primary ease-in-out duration-300 outline-none focus:ring-primary focus:text-primary focus:placeholder-primary"
                          placeholder="E-mail Address"
                        />
                        <input
                          type="password"
                          className="w-full border border-grey rounded-full py-3 px-5 text-grey placeholder-grey hover:border-primary focus:border-primary ease-in-out duration-300 outline-none focus:ring-primary focus:text-primary focus:placeholder-primary"
                          placeholder="Password"
                        />
                        <p className="text-grey underline hover:no-underline font-medium cursor-pointer">
                          <Link>Forgot your password?</Link>
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <button className="border border-grey rounded-full text-grey py-3 px-6 font-medium hover:border-primary hover:bg-primary hover:text-white ease-in-out duration-300 w-32">
                          Log In
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Billing Address */}
                  <div className="space-y-4">
                    <div className="flex gap-3 items-center">
                      <input
                        name="account"
                        type="radio"
                        checked={selected === "billingAddress"}
                        value="billingAddress"
                        onChange={handleChange}
                        id="billingAddress"
                        className="w-4 border-2 border-grey/50 text-primary ring-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="billingAddress"
                        className="text-xl text-grey font-medium"
                      >
                        Billing Address
                      </label>
                    </div>
                    <div
                      className={`space-y-5 ${
                        selected === "billingAddress" ? "" : "hidden"
                      }`}
                      aria-hidden={selected !== "billingAddress" ? true : false}
                    >
                      <div className="space-y-3">
                        <input
                          type="text"
                          className="w-full border border-grey rounded-full py-3 px-5 text-grey placeholder-grey hover:border-primary focus:border-primary ease-in-out duration-300 outline-none focus:ring-primary focus:text-primary focus:placeholder-primary"
                          placeholder="First Name"
                        />
                        <input
                          type="text"
                          className="w-full border border-grey rounded-full py-3 px-5 text-grey placeholder-grey hover:border-primary focus:border-primary ease-in-out duration-300 outline-none focus:ring-primary focus:text-primary focus:placeholder-primary"
                          placeholder="Last Name"
                        />
                        <input
                          type="email"
                          className="w-full border border-grey rounded-full py-3 px-5 text-grey placeholder-grey hover:border-primary focus:border-primary ease-in-out duration-300 outline-none focus:ring-primary focus:text-primary focus:placeholder-primary"
                          placeholder="Email"
                        />
                        <input
                          type="text"
                          className="w-full border border-grey rounded-full py-3 px-5 text-grey placeholder-grey hover:border-primary focus:border-primary ease-in-out duration-300 outline-none focus:ring-primary focus:text-primary focus:placeholder-primary"
                          placeholder="Mobile"
                        />
                        <input
                          type="text"
                          className="w-full border border-grey rounded-full py-3 px-5 text-grey placeholder-grey hover:border-primary focus:border-primary ease-in-out duration-300 outline-none focus:ring-primary focus:text-primary focus:placeholder-primary"
                          placeholder="Registration"
                        />
                        <input
                          type="text"
                          className="w-full border border-grey rounded-full py-3 px-5 text-grey placeholder-grey hover:border-primary focus:border-primary ease-in-out duration-300 outline-none focus:ring-primary focus:text-primary focus:placeholder-primary"
                          placeholder="Car Model"
                        />

                        <div className="flex gap-3 items-center">
                          <input
                            name="createAccount"
                            type="checkbox"
                            id="createAccount"
                            className="w-4 border-2 border-grey/50 rounded text-primary ring-primary focus:ring-primary"
                          />
                          <label
                            htmlFor="createAccount"
                            className="text-xl text-grey font-medium"
                          >
                            Create an Account?
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button className="border border-grey rounded-full text-grey py-3 px-6 font-medium hover:border-primary hover:bg-primary hover:text-white ease-in-out duration-300 w-32">
                          Payment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                  <div className="space-y-10">
                    <h3 className="text-3xl xl:text-5xl text-primary font-bold">
                      Booking Summary
                    </h3>
                    {/* Date and time */}
                    <div className="flex gap-3 items-center">
                      <div className="shrink-0">
                        <Clock className="text-stone-800 w-6" />
                      </div>

                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between">
                          <p className="text-stone-800 lg:text-lg font-medium">
                            03 March 2023
                          </p>
                          <button className="text-stone-800 rounded-full p-2 ease-in-out duration-300 hover:bg-primary hover:text-white ">
                            <Edit className="w-4" />
                          </button>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-stone-800 lg:text-lg font-medium">
                            12:30 AM
                          </p>
                          <button className="text-stone-800 rounded-full p-2 ease-in-out duration-300 hover:bg-primary hover:text-white ">
                            <Edit className="w-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      <li className="justify-between flex text-grey-3 lg:text-lg xl:text-2xl ">
                        <p>Car Wash</p>
                        <p>
                          <sup className="text-sm">CHF</sup>70
                        </p>
                      </li>
                      <li className="justify-between flex text-grey-3 lg:text-lg xl:text-2xl">
                        <p>Interior Cleaning</p>
                        <p>
                          <sup className="text-sm">CHF</sup>70
                        </p>
                      </li>
                      <li className="justify-between flex text-grey-3 lg:text-lg xl:text-2xl">
                        <p>Oil change</p>
                        <p>
                          <sup className="text-sm">CHF</sup>70
                        </p>
                      </li>
                      <li className="justify-between flex text-grey-3 lg:text-lg xl:text-2xl font-semibold">
                        <p>Total</p>
                        <p>
                          <sup className="text-sm">CHF</sup>210
                        </p>
                      </li>
                    </ul>
                  </div>
                
              </div>

              <div className="space-y-10">
                <div className="flex justify-between pb-5">
                <Link to="/step-2" className="flex text-primary gap-4 font-dm-sans items-center text-xl py-2 px-4 hover:bg-primary hover:text-white rounded-md ease-in-out duration-300 group">
                    <ArrowRight className="w-4 rotate-180" />
                    <span className="text-grey group-hover:text-white ease-in-out duration-300">
                      Previous
                    </span>
                  </Link>
                  <Link to="/step-4" className="flex text-primary gap-4 font-dm-sans items-center text-xl py-2 px-4 hover:bg-primary hover:text-white rounded-md ease-in-out duration-300">
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

export default StepThree;
