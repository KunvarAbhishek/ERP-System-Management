import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './CustomerTableGraph.css';

const Updates = () => {
  const countries = ['USA', 'India', 'UK', 'Australia', 'Germany'];
  const salesData = [10, 15, 5, 2, 8]; // Sample sales data for each country

  const salesChartRef = useRef(null);

  useEffect(() => {
    const salesChartData = {
      labels: countries,
      datasets: [{
        label: 'Sales by Country',
        data: salesData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    };

    // Render Sales Chart
    if (salesChartRef && salesChartRef.current) {
      new Chart(salesChartRef.current, {
        type: 'bar',
        data: salesChartData,
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              grid: {
                display: false
              }
            }
          },
          maintainAspectRatio: false,
tooltips: {
  callbacks: {
    label: function(context) {
      return `${context.dataset.label}: ${context.parsed.toFixed(2)}`;
    },
    afterLabel: function(context) {
      return countries[context.dataIndex]; // Add this line to show country name
    }
  }
}

        }
      });
    }
  }, [salesChartRef, countries, salesData]);

  // Generate random frequent buyers data for India
  const frequentBuyers = [];
  const numTiles = 3; // Number of tiles to display
  for (let i = 0; i < numTiles; i++) {
    const name = generateIndianName();
    const productBought = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    frequentBuyers.push({ name, productBought });
  }

  function generateIndianName() {
    const indianNames = ['Raj', 'Priya', 'Amit', 'Anita', 'Vikram'];
    return indianNames[Math.floor(Math.random() * indianNames.length)];
  }

  return (
    <div className="white-container" style={{ backgroundColor: 'white', padding: '20px' }}>
      <div className="SalesByCountry">
        <h4>Sales by Country (Million)</h4>
        <canvas ref={salesChartRef}></canvas>
      </div>
      <div></div>
      <div className="FrequentBuyers">
        <h3>Frequent Buyers</h3>
        <div className="buyer-container">
          {frequentBuyers.map((buyer, index) => (
            <div key={index} className="buyer-tile">
              <p className="small-text">{buyer.name}</p>
              <p className="small-text">Product: {buyer.productBought}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;






// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// import './CustomerTableGraph.css';

// const Updates = () => {
//   const countries = ['USA', 'India', 'UK', 'Australia', 'Germany'];
//   const salesData = [10, 15, 5, 2, 8]; // Sample sales data for each country

//   const salesChartRef = useRef(null);

//   useEffect(() => {
//     const salesChartData = {
//       labels: countries,
//       datasets: [{
//         label: 'Sales by Country',
//         data: salesData,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.5)',
//           'rgba(54, 162, 235, 0.5)',
//           'rgba(255, 205, 86, 0.5)',
//           'rgba(75, 192, 192, 0.5)',
//           'rgba(153, 102, 255, 0.5)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 205, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)'
//         ],
//         borderWidth: 1
//       }]
//     };

//     // Render Sales Chart
//     if (salesChartRef && salesChartRef.current) {
//       new Chart(salesChartRef.current, {
//         type: 'bar',
//         data: salesChartData,
//         options: {
//           scales: {
//             xAxis: {
//               beginAtZero: true
//             },
//                         y: {
//               grid: {
//                 display: false
//               }
//             }
   
//           },
//           maintainAspectRatio: false,
//           // height: 300 // Adjust this value as needed
//         }
//       });
//     }
//   }, [salesChartRef, countries, salesData]);

//   return (
//     <div className="white-container" style={{ backgroundColor: 'white', padding: '20px' }}>
//       <div className="SalesByCountry">
//         <h3>Sales by Country</h3>
//         <canvas ref={salesChartRef}></canvas>
//       </div>
//     </div>
//   );
// };

// export default Updates;
