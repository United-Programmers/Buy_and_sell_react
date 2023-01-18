import React from "react"
import ReactApexChart from "react-apexcharts"
import { Row, Card, Col } from "react-bootstrap"

const DriverChart = () => {
  const options = {
    colors: ["#AA7EB5", "#9a00c0", "#5e0175"],
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 0.1,
    },
    grid: {
      borderColor: "#d076e6",
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
  }

  const series = [
    {
      name: "Earned after Tax",
      data: [25, 150, 60, 180, 90, 75, 30, 50, 180, 60, 120, 39],
    },

    {
      name: "Earned before Tax",
      data: [15, 15, 195, 21, 160, 120, 30, 60, 190, 76, 160, 90],
    },

    {
      name: "Orders delivered",
      data: [45, 35, 95, 49, 60, 102, 60, 40, 90, 86, 98, 50],
    },
  ]

  return (
    <React.Fragment>
      <Card className="chartHeight" style={{ height: "270px" }}>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height="250"
        />
      </Card>
    </React.Fragment>
  )
}

export default DriverChart
