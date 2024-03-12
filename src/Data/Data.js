import {UilEstate,
		UilClipboardAlt,
		UilUsersAlt,
		UilPackage,
		UilChart,
		UilSingOutAlt,
		UilUsdSquare,
		UilMoneyWithdrawal,
		UilCalendarAlt,
		UilShoppingBag,
		UilShoppingBasket,
		UilNinja,
		UilBookAlt,
		UilGift,
} from "@iconscout/react-unicons"

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'
import img4 from '../imgs/img4.png'
import img5 from '../imgs/img5.png'
import img6 from '../imgs/img6.png'
import img7 from '../imgs/img7.png'


export const SidebarData = [
	{
		icon: UilEstate,
		heading: "Dashboard",	
	},
	{
		icon: UilPackage,
		heading: "Products",	
	},
	{
		icon: UilClipboardAlt,
		heading: "Orders",	
	},
	{
		icon: UilUsersAlt,
		heading: "Customers",	
	},
	{
		icon: UilCalendarAlt,
		heading: "CalenderView",	
	},
];


// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];



/* Card Data */


export const CardsData = [
	{
		title: "Total Product",
		color: {
			backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
			boxShadow: '0px 10px 20px 0px #e0c6f5',		
		},

		barValue: 95,
		value: "5,970",
		png: UilUsdSquare,
		series: [
			{
				name: "Sales",
				data: [31, 40, 28, 51, 42, 109, 100],
			},
		],
	},

		{
		title: "Revenue",
		color: {
			backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
			boxShadow: '0px 10px 20px 0px #FDC0C7',		
		},

		barValue: 80,
		value: "₹4,344,430",
		png: UilMoneyWithdrawal,
		series: [
			{
				name: "Revenue",
				data: [10, 100, 50, 70, 80, 30, 40],
			},
		],
	},

		{
		title: "Expense",
		color: {
			backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
			boxShadow: '0px 10px 20px 0px #F9D59B',		
		},

		barValue: 60,
		value: "₹454,834",
		png: UilClipboardAlt,
		series: [
			{
				name: "Expenses",
				data: [10, 25, 15, 30, 12, 15, 20],
			},
		],
	},
]


/* Sales Analystics */


export const SalesAnalytics = [
  {
    img: img4,
    name: "Online Orders",
    noti: "+31% 4289",
    time: "Last 24 hrs",
  },
  {
    img: img5,
    name: "Offline Orders",
    noti: "-05% 1232",
    time: "Last 24 hrs",
  },
  {
    img: img6,
    name: "New Customer",
    noti: "+29% 3224",
    time: "Last 24 hrs",
  },
  {
    img: img7,
    name: "New Products",
    noti: "+12% 4944",
    time: "Last 24 hrs",
  },
];




/* Cards Data Product */


export const CardsDataProduct = [
	{
		title: "Inventory Stock",
		color: {
			backGround: "linear-gradient(180deg, #28B463 0%, #ABEBC6 100%)",
			boxShadow: '0px 10px 20px 0px #EAFAF1',		
		},

		barValue: 84,
		value: "25,34,970",
		png: UilBookAlt,
		series: [
			{
				name: "Sales",
				data: [31, 40, 28, 51, 42, 109, 100],
			},
		],
	},

		{
		title: "Product Ordered ",
		color: {
			backGround: "linear-gradient(180deg, #7F8C8D 0%, #BDC3C7  100%)",
			boxShadow: '0px 10px 20px 0px #D6DBDF',		
		},

		barValue: 90,
		value: "24,546",
		png: UilGift,
		series: [
			{
				name: "Revenue",
				data: [10, 100, 50, 70, 80, 30, 40],
			},
		],
	},

		{
		title: "Supply Chain",
		color: {
			backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
			boxShadow: '0px 10px 20px 0px #F9D59B',		
		},

		barValue: 75,
		value: "5,970",
		png: UilClipboardAlt,
		series: [
			{
				name: "Expenses",
				data: [10, 25, 15, 30, 12, 15, 20],
			},
		],
	},
]





/* Card Data Order */

export const CardsDataOrder = [
	{
		title: "Order Trends",
		color: {
			backGround: "linear-gradient(180deg, #5DADE2 0%, #85C1E9  100%)",
			boxShadow: '0px 10px 20px 0px #e0c6f5',		
		},

		barValue: 84,
		value: "34,970",
		png: UilBookAlt,
		series: [
			{
				name: "Sales",
				data: [31, 40, 28, 51, 42, 109, 100],
			},
		],
	},

		{
		title: "Top Selling",
		color: {
			backGround: "linear-gradient(180deg, #e5a9c8 0%, #e5a7c6  100%)",
			boxShadow: '0px 10px 20px 0px #FDC0C7',		
		},

		barValue: 90,
		value: "4,546",
		png: UilGift,
		series: [
			{
				name: "Revenue",
				data: [10, 100, 50, 70, 80, 30, 40],
			},
		],
	},

		{
		title: "Order Profit",
		color: {
			backGround: "linear-gradient(rgb(88, 214, 141 ) -146.42%, rgb(171, 235, 198) -46.42%)",
			boxShadow: '0px 10px 20px 0px #EAFAF1',		
		},

		barValue: 92,
		value: " ₹ 843,126",
		png: UilClipboardAlt,
		series: [
			{
				name: "Expenses",
				data: [10, 25, 15, 30, 12, 15, 20],
			},
		],
	},
]




/* Card Data Customer */

export const CardsDataCustomer = [
	{
		title: "Preferences",
		color: {
			backGround: "linear-gradient(180deg, #D98880 0%, #E6B0AA  100%)",
			boxShadow: '0px 10px 20px 0px #E6B0AA',		
		},

		barValue: 84,
		value: "34,970",
		png: UilBookAlt,
		series: [
			{
				name: "Sales",
				data: [31, 40, 28, 51, 42, 109, 100],
			},
		],
	},

		{
		title: "Retention",
		color: {
			backGround: "linear-gradient(180deg, #F7DC6F 0%, #F1C40F   100%)",
			boxShadow: '0px 10px 20px 0px #F7DC6F',		
		},

		barValue: 90,
		value: "4,546",
		png: UilGift,
		series: [
			{
				name: "Revenue",
				data: [10, 100, 50, 70, 80, 30, 40],
			},
		],
	},

		{
		title: "Satisfaction",
		color: {
			backGround: "linear-gradient(rgb(208, 211, 212) -146.42%, rgb(213, 219, 219) -46.42%)",
			boxShadow: '0px 10px 20px 0px #EAEDED',		
		},

		barValue: 88,
		value: "4.3/5.0",
		png: UilClipboardAlt,
		series: [
			{
				name: "Expenses",
				data: [10, 25, 15, 30, 12, 15, 20],
			},
		],
	},
]







