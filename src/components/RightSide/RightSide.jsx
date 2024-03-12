import React from 'react'
import './RightSide.css'
import Updates from '../Updates/Updates'
import CustomerReview from '../CustomerReview/CustomerReview'
import SalesAnalytics from '../SalesAnalytics/SalesAnalytics'

const RightSide = () =>{
	return (
		<div className="RightSide">
			<div>
				<h3>Updates</h3>
				<SalesAnalytics/>
			</div>	

			<div className="crview">
				<h3>Customer Online</h3>
				<CustomerReview/>
				
			</div>
		</div>
	)
}

export default RightSide