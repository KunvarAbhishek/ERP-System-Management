import React from 'react'
import './RightSideCalenderView.css'
import Updates from '../Updates/Updates'
import CustomerReview from '../CustomerReview/CustomerReview'
import CalenderViewGraph from '../CalenderViewGraph/CalenderViewGraph'

const RightSide = () =>{
	return (
		<div className="RightSide">
			<div>
				<h2>Statistics</h2>
				<CalenderViewGraph/>
			</div>	

	{/*		<div className="crview">
				<h3>Customer Online</h3>
				<CustomerReview/>
				
			</div>*/}
		</div>
	)
}

export default RightSide