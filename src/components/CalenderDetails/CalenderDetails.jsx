import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalenderDetails.css';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

function createData(name, trackingId, date, status, customerName, amount) {
  return { name, trackingId, date, status, customerName, amount };
}

const makeStyle = (status) => {
  if (status === "On the way") {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  if (status === "Pending" || status === "Late") {
    return {
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else {
    return {
      background: '#59bfff',
      color: 'white',
    }
  };
};

export default function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowTable(true);
    setTableData(generateRandomData(date));
  };

  const generateRandomData = (date) => {
    const currentDate = new Date();
    const isPastDate = date < currentDate;
    const num = Math.floor(Math.random() * 4) + 2; // Random number between 2 and 5
    const data = [];
    for (let i = 0; i < num; i++) {
      const product = `Product ${i + 1}`;
      const trackingId = `CUI${Math.floor(Math.random() * 1000)}`;
      let status = '';
      if (isPastDate) {
        status = Math.random() < 0.5 ? 'Delivered' : 'Late';
      } else {
        status = Math.random() < 0.5 ? 'On the way' : 'Delivered';
      }
      const customerName = `Customer ${i + 1}`;
      const amount = Math.floor(Math.random() * 1000);
      data.push(createData(product, trackingId, date.toLocaleDateString(), status, customerName, amount));
    }
    return data;
  };

  return (
    <div className="CalendarView">
        <div className="title">
        <div><h2>Check Orders </h2></div>
        <div><h4>Click on any date to check orders</h4></div>
        </div>
      <div className="CalendarContainer">
        <div className="Calendar">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
          />
        </div>
      </div>
      {showTable && (
        <div className="Table">
          <div className="title">
        <h3>Upcoming Delievery</h3>
        </div>
          <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="left">Order Id</TableCell>
                  <TableCell align="left">Delivery Date</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Customer Name</TableCell>
                  <TableCell align="left">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.trackingId}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">
                      <span className='status' style={makeStyle(row.status)}>
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell align="left">{row.customerName}</TableCell>
                    <TableCell align="left">{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
}
