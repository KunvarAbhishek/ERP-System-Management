import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './User.css';

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', shopAmount: 100000, lastShopped: '28-02-2024', email: 'jon.snow@example.com', gender: 'Male', country: 'Westeros', age: 30 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', shopAmount: 150000, lastShopped: '28-02-2024', email: 'cersei.lannister@example.com', gender: 'Female', country: 'Westeros', age: 35 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', shopAmount: 200000, lastShopped: '28-02-2024', email: 'jaime.lannister@example.com', gender: 'Male', country: 'Westeros', age: 40 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', shopAmount: 80000, lastShopped: '28-02-2024', email: 'arya.stark@example.com', gender: 'Female', country: 'Westeros', age: 25 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', shopAmount: 120000, lastShopped: '28-02-2024', email: 'daenerys.targaryen@example.com', gender: 'Female', country: 'Westeros', age: 30 },
  { id: 6, lastName: 'Melisandre', firstName: 'Neil', shopAmount: 300000, lastShopped: '28-02-2024', email: 'melisandre.neil@example.com', gender: 'Female', country: 'Westeros', age: 45 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', shopAmount: 180000, lastShopped: '28-02-2024', email: 'ferrara.clifford@example.com', gender: 'Male', country: 'Westeros', age: 35 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', shopAmount: 140000, lastShopped: '28-02-2024', email: 'rossini.frances@example.com', gender: 'Female', country: 'Westeros', age: 40 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', shopAmount: 250000, lastShopped: '28-02-2024', email: 'harvey.roxie@example.com', gender: 'Male', country: 'Westeros', age: 30 },
  { id: 10, lastName: 'Baratheon', firstName: 'Robert', shopAmount: 220000, lastShopped: '28-02-2024', email: 'robert.baratheon@example.com', gender: 'Male', country: 'Westeros', age: 35 },
];

export default function DataTable() {
  const [stateRows, setRows] = useState(rows);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openAddUserPopup, setOpenAddUserPopup] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    gender: '',
    age: '',
    date: new Date().toISOString().slice(0, 10),
  });

  const handleDeleteUser = (id) => {
    const filteredRows = stateRows.filter((row) => row.id !== id);
    setRows(filteredRows);
  };

  const handleAddUser = () => {
    setRows([...stateRows, { ...newUser, id: stateRows.length + 1, shopAmount: 0, lastShopped: 'NA' }]);
    setOpenAddUserPopup(false);
    setNewUser({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      state: '',
      gender: '',
      age: '',
      date: new Date().toISOString().slice(0, 10),
    });
  };

  const handleDetailsClick = (event, id) => {
    event.stopPropagation();
    const user = stateRows.find((row) => row.id === id);
    setSelectedUser(user);
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 110 },
    { field: 'lastName', headerName: 'Last name', width: 110 },
    { field: 'shopAmount', headerName: 'Amount (INR)', width: 100 },
    { field: 'lastShopped', headerName: 'Last Shopped', width: 110},
    {
      field: 'details',
      headerName: 'Details',
      width: 100,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={(event) => handleDetailsClick(event, params.row.id)}
        >
          Details
        </Button>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={() => handleDeleteUser(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="usertable">
      <div className="title">
        <h2>Users</h2>
        <Button variant="contained" onClick={() => setOpenAddUserPopup(true)}>Add User</Button>
      </div>
      <DataGrid
        rows={stateRows}
        columns={columns}

        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        disableSelectionOnClick 
        pageSizeOptions={[5,10,25,50]}
        checkboxSelection
      />
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {selectedUser && (
          <div style={{ padding: 16 }}>
            <Typography>Name: {selectedUser.firstName} {selectedUser.lastName}</Typography>
            <Typography>Email: {selectedUser.email}</Typography>
            <Typography>Gender: {selectedUser.gender}</Typography>
            <Typography>Country: {selectedUser.country}</Typography>
            <Typography>Age: {selectedUser.age}</Typography>
            <Typography>Last Purchase Amount: {selectedUser.shopAmount}</Typography>
          </div>
        )}
      </Popover>
      <Popover
        open={openAddUserPopup}
        onClose={() => setOpenAddUserPopup(false)}
        anchorEl={openAddUserPopup ? anchorEl : null} 
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
          <Typography variant="h6">Add New User</Typography>
          <div style={{ display: 'grid', gap: 16 }}>
            <TextField
              label="First Name"
              value={newUser.firstName}
              onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
              fullWidth
            />
            <TextField
              label="Last Name"
              value={newUser.lastName}
              onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
              fullWidth
            />
            <TextField
              label="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              fullWidth
            />
            <TextField
              label="Phone"
              value={newUser.phone}
              onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
              fullWidth
            />
            <TextField
              label="Country"
              value={newUser.country}
              onChange={(e) => setNewUser({ ...newUser, country: e.target.value })}
              fullWidth
            />
            <TextField
              label="State"
              value={newUser.state}
              onChange={(e) => setNewUser({ ...newUser, state: e.target.value })}
              fullWidth
            />
            <TextField
              select
              label="Gender"
              value={newUser.gender}
              onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
              fullWidth
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </TextField>
            <TextField
              label="Age"
              value={newUser.age}
              onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
              fullWidth
            />
          </div>
          <Button variant="contained" onClick={handleAddUser} style={{ marginTop: 16 }}>Add User</Button>
        </div>
      </Popover>
    </div>
  );
}












// import React, { useState } from 'react';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import Button from '@mui/material/Button';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import './User.css'

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', shopAmount: 100000, lastShopped: '28-02-2024', email: 'jon.snow@example.com', gender: 'Male', country: 'Westeros', age: 30 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', shopAmount: 150000, lastShopped: '28-02-2024', email: 'cersei.lannister@example.com', gender: 'Female', country: 'Westeros', age: 35 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', shopAmount: 200000, lastShopped: '28-02-2024', email: 'jaime.lannister@example.com', gender: 'Male', country: 'Westeros', age: 40 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', shopAmount: 80000, lastShopped: '28-02-2024', email: 'arya.stark@example.com', gender: 'Female', country: 'Westeros', age: 25 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', shopAmount: 120000, lastShopped: '28-02-2024', email: 'daenerys.targaryen@example.com', gender: 'Female', country: 'Westeros', age: 30 },
//   { id: 6, lastName: 'Melisandre', firstName: 'Neil', shopAmount: 300000, lastShopped: '28-02-2024', email: 'melisandre.neil@example.com', gender: 'Female', country: 'Westeros', age: 45 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', shopAmount: 180000, lastShopped: '28-02-2024', email: 'ferrara.clifford@example.com', gender: 'Male', country: 'Westeros', age: 35 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', shopAmount: 140000, lastShopped: '28-02-2024', email: 'rossini.frances@example.com', gender: 'Female', country: 'Westeros', age: 40 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', shopAmount: 250000, lastShopped: '28-02-2024', email: 'harvey.roxie@example.com', gender: 'Male', country: 'Westeros', age: 30 },
//   { id: 10, lastName: 'Baratheon', firstName: 'Robert', shopAmount: 220000, lastShopped: '28-02-2024', email: 'robert.baratheon@example.com', gender: 'Male', country: 'Westeros', age: 35 },
// ];

// export default function DataTable() {
//   const [stateRows, setRows] = useState(rows);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);


 

//   const handleDeleteUser = (id) => {
//     const filteredRows = stateRows.filter((row) => row.id !== id);
//     setRows(filteredRows);
//   };

//   const handleAddUser = () => {
//     const newUser = {
//       id: stateRows.length + 1,
//       lastName: 'New',
//       firstName: 'User',
//       age: 25,
//     };
//     setRows([...stateRows, newUser]);
//   };

//   const handleDetailsClick = (event, id) => {
//     event.stopPropagation();
//     const user = stateRows.find((row) => row.id === id);
//     setSelectedUser(user);
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClosePopover = () => {
//     setAnchorEl(null);
//     setSelectedUser(null);
//   };

//   const columns: GridColDef[] = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 110 },
//     { field: 'lastName', headerName: 'Last name', width: 110 },
//     { field: 'shopAmount', headerName: 'Amount (INR)', width: 100 },
//     { field: 'lastShopped', headerName: 'Last Shopped', width: 110},
//     {
//       field: 'details',
//       headerName: 'Details',
//       width: 100,
//       renderCell: (params) => (
//         <Button
//           variant="contained"
//           size="small"
//           color="primary"
//           onClick={(event) => handleDetailsClick(event, params.row.id)}
//         >
//           Details
//         </Button>
//       ),
//     },
//     {
//       field: 'actions',
//       headerName: 'Actions',
//       width: 120,
//       renderCell: (params) => (
//         <Button
//           variant="contained"
//           size="small"
//           color="error"
//           onClick={() => handleDeleteUser(params.row.id)}
//         >
//           Delete
//         </Button>
//       ),
//     },
//   ];

//   return (
//     <div className="usertable">
//       <div className="title">
//         <h3>Users</h3>
//         <Button variant="contained" onClick={handleAddUser}>Add User</Button>
//       </div>
//       <DataGrid
//         rows={stateRows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         disableSelectionOnClick 
//         pageSizeOptions={[5,25,50]}
//         checkboxSelection
//       />
//       <Popover
//         open={Boolean(anchorEl)}
//         anchorEl={anchorEl}
//         onClose={handleClosePopover}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//       >
//         {selectedUser && (
//           <div style={{ padding: 16 }}>
//             <Typography>Name: {selectedUser.firstName} {selectedUser.lastName}</Typography>
//             <Typography>Email: {selectedUser.email}</Typography>
//             <Typography>Gender: {selectedUser.gender}</Typography>
//             <Typography>Country: {selectedUser.country}</Typography>
//             <Typography>Age: {selectedUser.age}</Typography>
//             <Typography>Last Purchase Amount: {Math.floor(Math.random() * (10000 - 500 + 1)) + 500}</Typography>
//           </div>
//         )}
//       </Popover>
//     </div>
//   );
// }

























// import React, { useState } from 'react';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import Button from '@mui/material/Button';
// import './User.css'

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', shopAmount: 100000, lastShopped: '28-02-2024' },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', shopAmount: 150000, lastShopped: '28-02-2024' },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', shopAmount: 200000, lastShopped: '28-02-2024' },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', shopAmount: 80000, lastShopped: '28-02-2024' },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', shopAmount: 120000, lastShopped: '28-02-2024' },
//   { id: 6, lastName: 'Melisandre', firstName: "Neil", shopAmount: 300000, lastShopped: '28-02-2024' },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', shopAmount: 180000, lastShopped: '28-02-2024' },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', shopAmount: 140000, lastShopped: '28-02-2024' },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', shopAmount: 250000, lastShopped: '28-02-2024' },
// ];

// export default function DataTable() {
//   const [stateRows, setRows] = useState(rows);

//   const handleDeleteUser = (id) => {
//     const filteredRows = stateRows.filter((row) => row.id !== id);
//     setRows(filteredRows);
//   };

//   const handleAddUser = () => {
//     const newUser = {
//       id: stateRows.length + 1,
//       lastName: 'New',
//       firstName: 'User',
//       age: 25,
//     };
//     setRows([...stateRows, newUser]);
//   };

//   const columns: GridColDef[] = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     { field: 'shopAmount', headerName: 'Amount (INR)', width: 100 },
//     { field: 'lastShopped', headerName: 'Last Shopped', width: 110},
//     {
//       field: 'actions',
//       headerName: 'Actions',
//       type: 'actions',
//       width: 80,
//       getActions: (params) => [
//         <Button
//           variant="contained"
//           size="small"
//           color="error"
//           onClick={() => handleDeleteUser(params.row.id)} // Pass the row ID to handleDeleteUser
//         >
//           Delete
//         </Button>,
//       ],
//     },
//   ];

//   return (
//     <div className="usertable">
//       <div className="title">
//         <h3>Users</h3>
//         <Button variant="contained" onClick={handleAddUser}>Add User</Button>
//       </div>
//       <DataGrid
//         rows={stateRows}
//         columns={columns}
        //         initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 5 },
        //   },
        // }}
//         pageSizeOptions={[5,10]}
//         checkboxSelection
//       />
//     </div>
//   );
// }
