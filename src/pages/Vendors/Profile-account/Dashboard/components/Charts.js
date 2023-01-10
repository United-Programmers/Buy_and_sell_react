import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class areachart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                colors: ['#ccc', '#9a00c0', '#d076e6'],
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 0.1,
                },
                grid: {
                    borderColor: '#d076e6',
                    row: {
                        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                legend: {
                    show: false
                },
            },
            series: [
                {
                    name: 'Earned after Tax',
                    data: [0, 150, 60, 180, 90, 75, 30, 50,180,60,120,39]
                },
              
                {
                    name: 'Earned before Tax',
                    data: [0, 15, 195, 21, 360, 120, 30,60,190,76,160,90]
                }
            ],
        }
    }
    render() {
        return (
            <React.Fragment >
                <div className="mt-lg-5 p-lg-2">
                    <ReactApexChart  options={this.state.options} series={this.state.series} type="area" height="400" />
                </div>
            </React.Fragment>
        );
    }
}

export default areachart;