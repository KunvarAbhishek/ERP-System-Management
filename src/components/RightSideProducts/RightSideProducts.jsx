import React from 'react'
import './RightSideProducts.css'
import Updates from '../Updates/Updates'
import CustomerReview from '../CustomerReview/CustomerReview'
import ProductTableGraph from '../ProductTableGraph/ProductTableGraph'

const RightSide = () =>{
	return (
		<div className="RightSide">
			<div>
				<h3>Product Demands</h3>
				<ProductTableGraph/>
			</div>	

	{/*		<div className="crview">
				<h3>Customer Online</h3>
				<CustomerReview/>
				
			</div>*/}
		</div>
	)
}

export default RightSide