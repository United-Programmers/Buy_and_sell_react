import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Row, Card, Col } from "react-bootstrap";

class Charts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                colors: ['#AA7EB5', '#9a00c0', '#A110C6'],
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
                    categories: ['Jan', 'Feb', 'Mar', 'Aprl', 'May', 'June', 'July','Aug','Sept','Oct','Nov','Dec'],
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
                    data: [25, 150, 60, 180, 90, 75, 30, 50,180,60,120,39]
                },
              
                {
                    name: 'Earned before Tax',
                    data: [15, 15, 195, 21, 360, 120, 30,60,190,76,160,90]
                }
            ],
        }
    }
    render() {
        return (
            <React.Fragment >
                <Card className="chartHeight" >
                    {/* Default   => type="area" */}
                    <ReactApexChart  options={this.state.options} series={this.state.series} type="bar"  height="250" />
                </Card>
            </React.Fragment>
        );
    }
}

export default Charts