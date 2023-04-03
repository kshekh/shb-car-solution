import React, { Component } from "react";
import Layout from "../../pages/layout";
import Calendar from "../Icons/Calendar";
import Chart from "react-apexcharts";
const slideCards = [
    {
        name: 'Vehicles Today',
        count: '3',
    },
    {
        name: 'Vehicles This Week',
        count: '18',
    },
    {
        name: 'Vehicles This Month',
        count: '43',
    },
    {
        name: 'Working Hours Today',
        count: '8',
    },
    {
        name: 'Working Hours This Week',
        count: '40',
    },
    {
        name: 'Working Hours This Month',
        count: '64',
    },
]

class Slide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00','07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',]
                },
                fill: {
                    colors: ['#EB6128',]
                  },
                  dataLabels: {
                    enabled: false
                  },
                  legend: {
                    show: false
                  },
                plotOptions: {
                    bar: {
                      columnWidth: "100%"
                    }, 
                  },
            },
            series: [
                {
                    name: "series-1",
                    data: [20, 50, 60, 40, 100, 70, 150, 91, 40,20, 50, 60, 40, 100, 70, 150, 91, 40,20, 50, 60, 40, 100, 70, 150, 91, 40,20, 50, 60, 40, 100, 70, 150, 91, 40,20, 50, 60, 40, 100, 70, 150, 91, 40,20, 50, 60, 40, 100, 70, 150, 91, 40,20, 50, 60, 40, 100, 70, 150, 91, 40,20, 50, 60, 40, 100, 70, 150, 91, 40,20, 50, 60, 40, 100, 70, 150, 91, 40,20, 50, 60, 40, 100, 70, 150, 91, 40,20, 50, 60, 40, 100, 70, 150, 91, 40,20, 50, 60, 40, 100, 70, 150, 91, 40,]
                }
            ]
        };
    }

    render() {
        return (

            <Layout>
                <section className="relative flex-1 py-5 sm:py-10">
                    <div className="max-w-screen-wrap px-3 wrap:px-5 mx-auto relative z-10 w-full space-y-16">
                        <div className="space-y-5">
                            <div className="flex flex-wrap gap-5 justify-between">
                                <h3 className="text-4xl text-stone-800 font-bold">
                                    Overview
                                </h3>
                                <button class="rounded-full flex gap-3 py-3 px-6 font-medium border-primary bg-primary text-white ease-in-out duration-300 "><Calendar className={'w-5'} /><span>07.02.2023 - 07.03.2023</span></button>
                            </div>
                            <div className="flex flex-col xs:grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                                {slideCards.map((card, index) => {
                                    return (
                                        <div className="rounded-2xl bg-grey-2 p-4 xl:p-6 flex flex-col" key={index}>
                                            <h4 className="text-xl leading-tight text-stone-800 flex-1">{card.name}</h4>
                                            <p className="text-3xl text-primary font-dm-sans font-semibold">{card.count}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="space-y-5">
                                <div className="flex justify-between">
                                    <h3 className="text-4xl text-stone-800 font-bold">
                                        Overview
                                    </h3>
                                </div>
                                <div className="gap-5">
                                    <div className="mixed-chart">
                                        <Chart
                                            options={this.state.options}
                                            series={this.state.series}
                                            type="bar"
                                             height={'250'}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </Layout>

        );
    }
}

export default Slide;