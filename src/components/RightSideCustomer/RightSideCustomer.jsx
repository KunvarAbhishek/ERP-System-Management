import React from 'react'
import './RightSideCustomer.css'
import Updates from '../Updates/Updates'
import CustomerReview from '../CustomerReview/CustomerReview'
import CustomerTableGraph from '../CustomerTableGraph/CustomerTableGraph'

const RightSide = () =>{
	return (
		<div className="RightSide">
			<div>
				<h2>Statistics</h2>
				<CustomerTableGraph/>
			</div>	

	{/*		<div className="crview">
				<h3>Customer Online</h3>
				<CustomerReview/>
				
			</div>*/}
		</div>
	)
}

export default RightSide