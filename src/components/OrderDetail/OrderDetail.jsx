import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UilTrash } from '@iconscout/react-unicons';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography'; // Add Typography for heading
import TextField from '@mui/material/TextField'; // Add TextField for input
import './OrderDetail.css';

function createData(
  product: string,
  orderId: number,
  amount: number,
  name: string,
  ordered: string,
  delivery: string,
  status: string,
) {
  return { product, orderId, amount, name, ordered, delivery, status };
}

const rows = [
  createData('Smartphone', 18425, 1000, 'John Doe', '01-03-24', '05-03-24', 'Delivered'),
  createData('Laptop', 18926, 1500, 'Jane Doe', '02-03-24', '06-03-24', 'In cart'),
  createData('Smartwatch', 18427, 500, 'Alice Smith', '03-03-24', '07-03-24', 'Dispatched'),
  createData('Tablet', 18928, 800, 'Bob Johnson', '04-03-24', '08-03-24', 'Delivered'),
  createData('Earphones', 18429, 200, 'Eve Williams', '05-03-24', '09-03-24', 'Cancelled'),
  createData('Camera', 18434, 700, 'Daniel Smith', '10-03-24', '14-03-24', 'Delivered'),
  createData('Speaker', 18435, 100, 'Olivia Johnson', '11-03-24', '15-03-24', 'Delivered'),
  createData('Monitor', 18430, 1200, 'Michael Brown', '06-03-24', '10-03-24', 'In cart'),
];

const makeStyle = (status: string) => {
  let background = '';
  let color = '';
  switch (status) {
    case 'Dispatched':
      background = 'lightblue';
      color = 'black';
      break;
    case 'Pending':
      background = 'red';
      color = 'white';
      break;
    case 'Delivered':
      background = 'lightgreen';
      color = 'black';
      break;
    case 'Cancelled':
      background = 'red';
      color = 'white';
      break;
    case 'In cart':
      background = 'lightpink';
      color = 'black';
      break;
    default:
      background = '#59bfff';
      color = 'white';
  }
  return {
    background,
    color,
  };
};

export default function OrderDetail() {
  const [details, setDetails] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [deleteOrderId, setDeleteOrderId] = React.useState(null);
  const [tableRows, setTableRows] = React.useState(rows);

  const handleClick = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setDeleteOrderId(orderId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDeleteOrderId(null);
  };

  const handleToggleDetails = (row) => {
    if (details === row) {
      setDetails(null);
    } else {
      setDetails(row);
    }
  };

  const handleDeleteClick = () => {
    // Update the table rows to remove the deleted order
    const updatedRows = tableRows.filter((row) => row.orderId !== parseInt(deleteOrderId));
    setTableRows(updatedRows);
    handleClose();
  };

  const handleStatusChange = (newValue, orderId) => {
    const updatedRows = tableRows.map((row) => {
      if (row.orderId === orderId) {
        return { ...row, status: newValue };
      }
      return row;
    });
    setTableRows(updatedRows);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'delete-popover' : undefined;

  return (
    <div className="Table">
      <div className="title">
        <h3>Recent Orders</h3>
        
        <Button
          variant="contained"
          className="deleteButton"
          onClick={(event) => handleClick(event, tableRows[0].orderId)} // Example: Delete the first order
          style={{ backgroundColor: 'red', color: 'white' }}
        >
          <UilTrash />
          Delete Order
        </Button>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div style={{ padding: 16, minWidth: 300 }}>
            <Typography variant="h6">Enter Order ID</Typography>
            <TextField
              label="Order ID"
              type="number"
              value={deleteOrderId}
              onChange={(e) => setDeleteOrderId(e.target.value)}
              fullWidth
            />
            <Button variant="contained" onClick={handleDeleteClick} style={{ marginTop: 16 }}>Delete Order</Button>
          </div>
        </Popover>
      </div>

      <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029', overflowX: 'auto' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Order ID</TableCell>
              <TableCell align="left">Amount ₹</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Order</TableCell>
              <TableCell align="left">Delivery</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row) => (
              <TableRow
                key={row.product}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.product}
                </TableCell>
                <TableCell align="left">{row.orderId}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.ordered}</TableCell>
                <TableCell align="left">{row.delivery}</TableCell>
                <TableCell align="left">
                  <select
                    value={row.status}
                    onChange={(e) => handleStatusChange(e.target.value, row.orderId)}
                    style={{ backgroundColor: makeStyle(row.status).background, color: makeStyle(row.status).color }}
                  >
                    <option value="Dispatched">Dispatched</option>
                    <option value="In cart">In cart</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </TableCell>
                <TableCell align="left" className="Details">
                  <span
                    onClick={() => handleToggleDetails(row)}
                  >
                    Click Info
                  </span>
                  {details === row && (
                    <div className="detailsPopup">
                      <strong>Name:</strong> {row.name}<br />
                      <strong>Product Bought:</strong> {row.product}<br />
                      <strong>Order Date:</strong> {row.ordered}<br />
                      <strong>Total Goods Bought:</strong> 1 {/* Placeholder value, update based on actual data */}
                      <br />
                      <strong>Total Spend:</strong> ₹{row.amount}<br />
                      <strong>Average Review:</strong> 4.5 out of 5 {/* Placeholder value, update based on actual data */}
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

















// -----------------------------------------------------------------------------------


// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { UilTrash } from '@iconscout/react-unicons';
// import Button from '@mui/material/Button';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography'; // Add Typography for heading
// import TextField from '@mui/material/TextField'; // Add TextField for input
// import './OrderDetail.css';

// function createData(
//   product: string,
//   orderId: number,
//   amount: number,
//   name: string,
//   ordered: string,
//   delivery: string,
//   status: string,
// ) {
//   return { product, orderId, amount, name, ordered, delivery, status };
// }

// const rows = [
//   createData('Smartphone', 18425, 1000, 'John Doe', '01-03-2024', '05-03-2024', 'Delivered'),
//   createData('Laptop', 18926, 1500, 'Jane Doe', '02-03-2024', '06-03-2024', 'In cart'),
//   createData('Smartwatch', 18427, 500, 'Alice Smith', '03-03-2024', '07-03-2024', 'Dispatched'),
//   createData('Tablet', 18928, 800, 'Bob Johnson', '04-03-2024', '08-03-2024', 'Delivered'),
//   createData('Earphones', 18429, 200, 'Eve Williams', '05-03-2024', '09-03-2024', 'Cancelled'),
//   createData('Camera', 18434, 700, 'Daniel Smith', '10-03-2024', '14-03-2024', 'Delivered'),
//   createData('Speaker', 18435, 100, 'Olivia Johnson', '11-03-2024', '15-03-2024', 'Delivered'),
//   createData('Monitor', 18430, 1200, 'Michael Brown', '06-03-2024', '10-03-2024', 'In cart'),
// ];


// const makeStyle = (status: string) => {
//   let background = '';
//   let color = '';
//   switch (status) {
//     case 'Dispatched':
//       background = 'lightblue';
//       color = 'black';
//       break;
//     case 'Pending':
//       background = 'red';
//       color = 'white';
//       break;
//     case 'Delivered':
//       background = 'lightgreen';
//       color = 'black';
//       break;
//     case 'Cancelled':
//       background = 'red';
//       color = 'white';
//       break;
//     case 'In cart':
//       background = 'lightpink';
//       color = 'black';
//       break;
//     default:
//       background = '#59bfff';
//       color = 'white';
//   }
//   return {
//     background,
//     color,
//   };
// };


// export default function OrderDetail() {
//   const [details, setDetails] = React.useState(null);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [deleteOrderId, setDeleteOrderId] = React.useState(null);
//   const [tableRows, setTableRows] = React.useState(rows);

//   const handleClick = (event, orderId) => {
//     setAnchorEl(event.currentTarget);
//     setDeleteOrderId(orderId);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setDeleteOrderId(null);
//   };

//   const handleToggleDetails = (row) => {
//     if (details === row) {
//       setDetails(null);
//     } else {
//       setDetails(row);
//     }
//   };

//   const handleDeleteClick = () => {
//     // Update the table rows to remove the deleted order
//     const updatedRows = tableRows.filter((row) => row.orderId !== deleteOrderId);
//     setTableRows(updatedRows);
//     handleClose();
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'delete-popover' : undefined;

//   return (
//     <div className="Table">
//       <div className="title">
//         <h3>Recent Orders</h3>
        
//         <Button
//           variant="contained"
//           className="deleteButton"
//           onClick={(event) => handleClick(event, tableRows[0].orderId)} // Example: Delete the first order
//           style={{ backgroundColor: 'red', color: 'white' }}
//         >
//           <UilTrash />
//           Delete Order
//         </Button>

//         <Popover
//           id={id}
//           open={open}
//           anchorEl={anchorEl}
//           onClose={handleClose}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'center',
//           }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'center',
//           }}
//         >
//           <div style={{ padding: 16, minWidth: 300 }}>
//             <Typography variant="h6">Enter Order ID</Typography>
//             <TextField
//               label="Order ID"
//               type="number"
//               value={deleteOrderId}
//               onChange={(e) => setDeleteOrderId(e.target.value)}
//               fullWidth
//             />
//             <Button variant="contained" onClick={handleDeleteClick} style={{ marginTop: 16 }}>Delete Order</Button>
//           </div>
//         </Popover>
//       </div>

//       <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029', overflowX: 'auto' }}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Product</TableCell>
//               <TableCell align="left">Order ID</TableCell>
//               <TableCell align="left">Amount ₹</TableCell>
//               <TableCell align="left">Name</TableCell>
//               <TableCell align="left">Order</TableCell>
//               <TableCell align="left">Delivery</TableCell>
//               <TableCell align="left">Status</TableCell>
//               <TableCell align="left"></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {tableRows.map((row) => (
//               <TableRow
//                 key={row.product}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {row.product}
//                 </TableCell>
//                 <TableCell align="left">{row.orderId}</TableCell>
//                 <TableCell align="left">{row.amount}</TableCell>
//                 <TableCell align="left">{row.name}</TableCell>
//                 <TableCell align="left">{row.ordered}</TableCell>
//                 <TableCell align="left">{row.delivery}</TableCell>
//                 <TableCell align="left">
//                   <span className="status" style={makeStyle(row.status)}>
//                     {row.status === 'Pending' ? 'In cart' : row.delivery === 'Delivered' ? 'Delivered' : row.status}
//                   </span>
//                 </TableCell>
//                 <TableCell align="left" className="Details">
//                   <span
//                     onClick={() => handleToggleDetails(row)}
//                   >
//                     Details
//                   </span>
//                   {details === row && (
//                     <div className="detailsPopup">
//                       <strong>Name:</strong> {row.name}<br />
//                       <strong>Product Bought:</strong> {row.product}<br />
//                       <strong>Order Date:</strong> {row.ordered}<br />
//                       <strong>Total Goods Bought:</strong> 1 {/* Placeholder value, update based on actual data */}
//                       <br />
//                       <strong>Total Spend:</strong> ₹{row.amount}<br />
//                       <strong>Average Review:</strong> 4.5 out of 5 {/* Placeholder value, update based on actual data */}
//                     </div>
//                   )}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }
