import React from 'react'
import Cards from '../CardsCustomers/Cards'
import Table from '../Table/Table'
import './Customers.css'
import User from '../User/User'


const MainDash = ()=>{
	return (
		<div className="MainDash">
			<h2>User Management</h2>
			<Cards />
			<User  />
		</div>
	)
}

export default MainDash