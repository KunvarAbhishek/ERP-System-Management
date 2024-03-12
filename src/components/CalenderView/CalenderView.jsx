import React from 'react';
import Cards from '../Cards/Cards';
import CalenderDetails from '../CalenderDetails/CalenderDetails';
import './CalenderView.css';



const MainDash = ()=>{
	return (
		<div className="MainDsash">
			{/*<h1>Dashboard</h1>
			<Cards />*/}
			<CalenderDetails />
		</div>
	)
}

export default MainDash