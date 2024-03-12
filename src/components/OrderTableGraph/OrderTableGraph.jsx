import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './OrderTableGraph.css'

const Updates = () => {
  const orderStatus = ['Delivered', 'Replaced', 'Refunded', 'Cancelled'];
  const ratings = ['1 Stars', '2 Stars', '3 Stars', '4 Stars', '5 Stars'];

  const orderStatusChartRef = useRef(null);
  const ratingsChartRef = useRef(null);

  useEffect(() => {
    // Order Status Data
    const orderStatusData = {
      labels: orderStatus.map((status, index) => `${status} (${[64,12, 11, 10][index]}%)`),
      datasets: [{
        data: [70, 16, 9, 5],
        backgroundColor: [
          'rgb(100, 200, 100)',
          'rgb(200, 100, 100)',
          'rgb(100, 100, 200)',
          'rgb(200, 200, 200)'
        ],
      }]
    };

    // User Review Ratings Data
    const ratingsData = {
      labels: ratings.map((rating, index) => `${rating} (${[10, 14, 19, 45, 12][index]}%)`),
      datasets: [{
        data: [10, 14, 19, 45, 12],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)'
        ],
      }]
    };

    // Render Order Status Chart
    if (orderStatusChartRef && orderStatusChartRef.current) {
      new Chart(orderStatusChartRef.current, {
        type: 'pie',
        data: orderStatusData,
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'bottom'
            }
          }
        }
      });
    }

    // Render Ratings Chart
    if (ratingsChartRef && ratingsChartRef.current) {
      new Chart(ratingsChartRef.current, {
        type: 'pie',
        data: ratingsData,
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'bottom'
            }
          }
        }
      });
    }
  }, []);

  return (
    <div className="white-container" style={{ backgroundColor: 'white', padding: '20px' }}>
      <div className="OrderStatus">
        <h3>Order Status</h3>
        <canvas ref={orderStatusChartRef}></canvas>
      </div>
      <div className="UserReview">
        <h3>User Ratings</h3>
        <canvas ref={ratingsChartRef}></canvas>
      </div>
    </div>
  );
};

export default Updates;



// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// const Updates = () => {
//   const orderStatus = ['Delivered', 'Replaced', 'Refunded', 'Cancelled'];
//   const ratings = ['1 Stars', '2 Stars', '3 Stars', '4 Stars', '5 Stars']; // Fixed incomplete string in the ratings array

//   const orderStatusChartRef = useRef(null);
//   const ratingsChartRef = useRef(null);

//   useEffect(() => {
//     // Order Status Data
//     const orderStatusData = {
//       labels: orderStatus.map((status, index) => `${status} (${[70, 16, 9, 5][index]}%)`),
//       datasets: [{
//         data: [70, 16, 9, 5],
//         backgroundColor: [
//           'rgb(100, 200, 100)',
//           'rgb(200, 100, 100)',
//           'rgb(100, 100, 200)',
//           'rgb(200, 200, 200)'
//         ],
//       }]
//     };

//     // User Review Ratings Data
//     const ratingsData = {
//       labels: ratings.map((rating, index) => `${rating} (${[10, 14, 22, 44, 10][index]}%)`),
//       datasets: [{
//         data: [10, 14, 22, 44, 10],
//         backgroundColor: [
//           'rgb(255, 99, 132)',
//           'rgb(255, 159, 64)',
//           'rgb(255, 205, 86)',
//           'rgb(75, 192, 192)',
//           'rgb(54, 162, 235)'
//         ],
//       }]
//     };

//     // Render Order Status Chart
//     if (orderStatusChartRef && orderStatusChartRef.current) {
//       new Chart(orderStatusChartRef.current, {
//         type: 'pie',
//         data: orderStatusData,
//         options: {
//           plugins: {
//             legend: {
//               display: true,
//               position: 'bottom'
//             }
//           }
//         }
//       });
//     }

//     // Render Ratings Chart
//     if (ratingsChartRef && ratingsChartRef.current) {
//       new Chart(ratingsChartRef.current, {
//         type: 'pie',
//         data: ratingsData,
//         options: {
//           plugins: {
//             legend: {
//               display: true,
//               position: 'bottom'
//             }
//           }
//         }
//       });
//     }
//   }, []);

//   return (
//     <div className="white-container" style={{ backgroundColor: 'white', padding: '20px' }}>
//       <div className="OrderStatus">
//         <h3>Status Breakdown</h3>
//         <canvas ref={orderStatusChartRef}></canvas>
//       </div>
//       <div className="UserReview">
//         <h3>User Review</h3>
//         <canvas ref={ratingsChartRef}></canvas>
//       </div>
//     </div>
//   );
// };

// export default Updates;

