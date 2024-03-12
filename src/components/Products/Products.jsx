import React from 'react'
import Cards from '../CardsProducts/Cards'
import Table from '../Table/Table'
import './Products.css'
import ProductTable from '../ProductTable/ProductTable'

const MainDash = ()=>{
	return (
		<div className="MainDash">
			<h2>Products Management</h2>
			<Cards />
			<ProductTable />

		</div>
	)
}

export default MainDash