import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar():JSX.Element {
	return (
		<div className="nav-items">
			<NavLink
				className="nav-items"
				to="/order/new"
				activeStyle={{
					fontWeight: 'bold',
					color: '#0DADEA',
				}}
			>
        Create Order
			</NavLink>
			<NavLink
				className="nav-items"
				to="/orders"
				activeStyle={{
					fontWeight: 'bold',
					color: '#0DADEA',
				}}
			>
        Display Orders
			</NavLink>
		</div>
	)
}

export default Navbar


