import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { UilTrash} from '@iconscout/react-unicons';


import './ProductTable.css';

import photo1 from './photo1.png';

const categories = [
  'Electronics',
  'Clothing',
  'Home',
  'Beauty',
  'Toys',
  'Kids',
  'Sports',
  'Grocery',
  'Pet Supplies',
  'Health',
];


const rows = [
  { id: 1001, photo: photo1, name: 'Product 1', category: 'Electronics', price: 100, stock: true, quantity: 10, edit: 'Details 1' },
  { id: 1002, photo: photo1, name: 'Product 2', category: 'Food', price: 50, stock: false, quantity: 5, edit: 'Details 2' },
  { id: 1003, photo: photo1, name: 'Product 3', category: 'Electronics', price: 100, stock: true, quantity: 10, edit: 'Details 3' },
  { id: 1004, photo: photo1, name: 'Product 4', category: 'Food', price: 50, stock: false, quantity: 5, edit: 'Details 4' },
  { id: 1005, photo: photo1, name: 'Product 5', category: 'Electronics', price: 100, stock: true, quantity: 10, edit: 'Details 5' },
  { id: 1006, photo: photo1, name: 'Product 6', category: 'Food', price: 50, stock: false, quantity: 5, edit: 'Details 6' },
  { id: 1007, photo: photo1, name: 'Product 7', category: 'Electronics', price: 100, stock: true, quantity: 10, edit: 'Details 7' },
  { id: 1008, photo: photo1, name: 'Product 8', category: 'Food', price: 50, stock: false, quantity: 5, edit: 'Details 8' },
  { id: 1009, photo: photo1, name: 'Product 9', category: 'Electronics', price: 100, stock: true, quantity: 10, edit: 'Details 9' },
  { id: 1010, photo: photo1, name: 'Product 10', category: 'Food', price: 50, stock: false, quantity: 5, edit: 'Details 10' },
];


const DataTable = () => {
  const [stateRows, setRows] = useState(rows);
  const [nextId, setNextId] = useState(rows.length + 1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openAddUserPopup, setOpenAddUserPopup] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    quantity: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);



  const handleEditClick = (id, event) => {
    const userToEdit = stateRows.find((row) => row.id === id);
    setSelectedUser(userToEdit);
    setAnchorEl(event.currentTarget);
  };

const handleInfoClick = (selectedProduct, event) => {
  setSelectedProduct(selectedProduct);
  setAnchorEl(event.currentTarget);
};

  const handleAddClick = () => {
    const newProduct = {
      id: nextId,
      photo: photo1,
      name: newUser.name,
      category: newUser.category,
      price: newUser.price,
      stock: newUser.stock === 'true', // Convert to boolean
      quantity: newUser.quantity,
    };

    const updatedRows = [...stateRows, newProduct];
    setRows(updatedRows);
    setNextId(nextId + 1);
    setOpenAddUserPopup(false);
    setSnackbarOpen(true);
  };

  const handleEditProduct = () => {
    const updatedRows = stateRows.map((row) => {
      if (row.id === selectedUser.id) {
        return selectedUser;
      }
      return row;
    });
    setRows(updatedRows);
    setAnchorEl(null);
    setSelectedUser(null);
    setSnackbarOpen(true);
  };

  const handleDeleteClick = (id) => {
    const updatedRows = stateRows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'photo', headerName: 'Product', width: 80, renderCell: (params) => <img src={params.row.photo} alt="Product" style={{ width: '40px', height: '40px' }} /> },
    { field: 'name', headerName: 'Name' },
    { field: 'category', headerName: 'Category' },
    { field: 'price', headerName: 'Price', width: 80 },
    {
      field: 'stock',
      headerName: 'Stock',
      renderCell: (params) => (
        <Typography style={{ fontWeight: params.row.stock ? 'bold' : 'normal', color: params.row.stock ? 'green' : 'red' }}>
          {params.row.stock ? 'Yes' : 'No'}
        </Typography>
      ), width: 60
    },
    { field: 'quantity', headerName: 'Quantity', width: 80 },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 80,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={(event) => handleEditClick(params.row.id, event)}
        >
          Edit
        </Button>
      ),
    },
    {
      field: 'delete',
      headerName: 'Delete',
     width: 80 ,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor: 'red', color: 'white' }}
          onClick={() => handleDeleteClick(params.row.id)}
        >
          <UilTrash/>
        </Button>
      ),
    },

      {
    field: 'info',
    headerName: 'Info',
    width: 80,
    renderCell: (params) => (
      <Button
        variant="contained"
        size="small"
        style={{ backgroundColor: 'black', color: 'white' }}
        onClick={(event) => handleInfoClick(params.row, event)}
      >
        Info
      </Button>
    ),
  },
 
  ];

  return (
    <div className="usertable">
      <div className="title">
        <h2>Products</h2>
        <Button variant="contained" onClick={() => setOpenAddUserPopup(true)}>Add Product</Button>
      </div>
      <DataGrid
        rows={stateRows}
        columns={columns}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5,10,25,50]}
        checkboxSelection={false}
      />
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => {
          setSelectedUser(null);
          setAnchorEl(null);
        }}
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
          <div style={{ padding: 16, minWidth: 200 }}>
            <Typography variant="h6">Edit Product</Typography>
            <div style={{ display: 'grid', gap: 16 }}>
              <TextField
                label="Name"
                value={selectedUser.name}
                onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                fullWidth
              />
              <Select
                label="Category"
                value={selectedUser.category}
                onChange={(e) => setSelectedUser({ ...selectedUser, category: e.target.value })}
                fullWidth
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                label="Price"
                value={selectedUser.price}
                onChange={(e) => setSelectedUser({ ...selectedUser, price: e.target.value })}
                fullWidth
              />
              <TextField
                label="Stock"
                value={selectedUser.stock}
                onChange={(e) => setSelectedUser({ ...selectedUser, stock: e.target.value })}
                fullWidth
              />
              <TextField
                label="Quantity"
                value={selectedUser.quantity}
                onChange={(e) => setSelectedUser({ ...selectedUser, quantity: e.target.value })}
                fullWidth
              />
              <Button variant="contained" onClick={handleEditProduct} style={{ marginTop: 16 }}>Edit</Button>
            </div>
          </div>
        )}
      </Popover>

      <Popover
  open={Boolean(anchorEl) && Boolean(selectedProduct)}
  anchorEl={anchorEl}
  onClose={() => {
    setSelectedProduct(null);
    setAnchorEl(null);
  }}
  // ... rest of the properties
>
{selectedProduct && (
  <div style={{ padding: 16, minWidth: 200 }}>
    <Typography variant="h6">Product Info</Typography>
    <Typography>{`Name: ${selectedProduct.name}`}</Typography>
    <Typography>{`ID: ${selectedProduct.id}`}</Typography>
    <Typography>{`Total Quantity Sold: ${Math.floor(Math.random() * (10000 - 1000) + 100)}`}</Typography>
    <Typography>{`Seller Name: My Super`}</Typography>
    <Typography>{`Demand: ${['High', 'Medium', 'Low'][Math.floor(Math.random() * 3)]}`}</Typography>
    <Typography>{`Revenue: ₹${Math.floor(Math.random() * (99999 - 10000) + 10000)}`}</Typography>
  </div>
)}
</Popover>

      <Popover
        open={openAddUserPopup}
        onClose={() => setOpenAddUserPopup(false)}
        anchorEl={anchorEl}
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
          <Typography variant="h6">Add Product</Typography>
          <div style={{ display: 'grid', gap: 16 }}>
            <TextField
              label="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              fullWidth
            />
            <Select
              label="Category"
              value={newUser.category}
              onChange={(e) => setNewUser({ ...newUser, category: e.target.value })}
              fullWidth
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
            <TextField
              label="Price"
              value={newUser.price}
              onChange={(e) => setNewUser({ ...newUser, price: e.target.value })}
              fullWidth
            />
            <TextField
              label="Stock"
              value={newUser.stock}
              onChange={(e) => setNewUser({ ...newUser, stock: e.target.value })}
              fullWidth
            />
            <TextField
              label="Quantity"
              value={newUser.quantity}
              onChange={(e) => setNewUser({ ...newUser, quantity: e.target.value })}
              fullWidth
            />
               <input
      type="file"
      accept="image/*"
      // Assuming you have a function handlePhotoUpload to handle the file upload
    />
            <Button variant="contained" onClick={handleAddClick} style={{ marginTop: 16 }}>Add Product</Button>
          </div>
        </div>
      </Popover>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="success">
          Product added successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default DataTable;










