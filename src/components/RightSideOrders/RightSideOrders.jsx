import React from 'react'
import './RightSideOrders.css'
import Updates from '../Updates/Updates'
import CustomerReview from '../CustomerReview/CustomerReview'
import OrderTableGraph from '../OrderTableGraph/OrderTableGraph'

const RightSide = () =>{
	return (
		<div className="RightSide">
			<div>
				<h3>Feedback</h3>
				<OrderTableGraph/>
			</div>	

	{/*		<div className="crview">
				<h3>Customer Online</h3>
				<CustomerReview/>
				
			</div>*/}
		</div>
	)
}

export default RightSide