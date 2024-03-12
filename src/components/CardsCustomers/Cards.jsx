import React from 'react'
import './Cards.css'
import {CardsDataCustomer} from '../../Data/Data'
import Card from '../CardCustomer/Card'



const Cards = ()=>{
	return (
		<div className="Cards">
			{CardsDataCustomer.map((card, id) => {
				return (
					<div className="parentContainer" key={id}>
						<Card
						title={card.title}
						color= {card.color}
						barValue= {card.barValue}
						value={card.value}
						png={card.png}
						series= {card.series}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default Cards 