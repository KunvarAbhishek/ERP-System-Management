import React from 'react'
import Cards from '../CardsOrders/Cards'
import OrderDetail from '../OrderDetail/OrderDetail'
import './Orders.css'


const MainDash = ()=>{
	return (
		<div className="MainDash">
			<h2>Orders Management</h2>
			<Cards />
			<OrderDetail />
		</div>
	)
}

export default MainDash