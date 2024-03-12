import React from "react";
import Chart from "react-apexcharts";


const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Customer",
        data: [1032, 5020, 3430, 9320, 4004, 5403, 10310],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2024-03-19T00:00:00.000Z",
          "2024-03-19T01:30:00.000Z",
          "2024-03-19T02:30:00.000Z",
          "2024-03-19T03:30:00.000Z",
          "2024-03-19T04:30:00.000Z",
          "2024-03-19T05:30:00.000Z",
          "2024-03-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false
      },
      toolbar:{
        show: false
      }
    },
  };
  return <div className="CustomerReview">
        <Chart options={data.options} series={data.series} type="area" />
  </div>;
};

export default CustomerReview;
