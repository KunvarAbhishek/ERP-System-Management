import React from 'react';
import Chart from 'react-apexcharts';

const Updates = () => {
  const generateRandomData = () => {
    let data = [];
    for (let i = 0; i < 12; i++) {
      data.push(Math.floor(Math.random() * 10000) + 104334);
    }
    return data;
  };

  const data = {
    series: [
      {
        name: 'Delivery',
        data: generateRandomData(),
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 400, // Set the height to a larger value
        background: '#fff',
      },
      fill: {
        colors: ['#fff'],
        type: 'gradient',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        colors: ['#ff929f'],
      },
      tooltip: {
        x: {
          format: 'MMMM',
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: 'category',
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        labels: {
          show: true,
          offsetY: 20, // Offset the labels below the x-axis
        },
      },
      yaxis: {
        show: false,
      },
      annotations: {
        // Add a text annotation for the title
        x: '50%',
        y: '100%',
        text: 'Delivery by Month',
        textAnchor: 'middle',
        offsetY: 30, // Offset the annotation below the x-axis labels
        style: {
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333',
        },
      },
      toolbar: {
        show: false,
      },
    },
  };

  return (
    <div className="DeliveryChart" style={{ width: '100%', height: '100%', minHeight: '300px', position: 'relative' }}>
      <Chart options={data.options} series={data.series} type="area" height={400} />
      <div
        className="chart-title"
        style={{
          position: 'absolute',
          top: '25px',
          left: '50%',
          fontWeight:'bold',
          transform: 'translateX(-50%)',
          width: '80%', // Set the title width to 100%
          background: '#fff',
          padding: '5px 10px',
          borderRadius: '5px',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
          transition: 'box-shadow 0.3s',
          textAlign: 'center',
        }}
        onMouseOver={(e) => { e.target.style.boxShadow = 'none'; }}
        onMouseOut={(e) => { e.target.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.2)'; }}
      >
        Delivery by Month
      </div>
    </div>
  );
};

export default Updates;
