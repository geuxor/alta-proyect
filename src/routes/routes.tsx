import React from 'react'
import { Switch, Route } from 'react-router-dom'
import OrderDetails from '../Components/Orders/OrderDetails'
import OrderCreate from '../Components/Orders/OrderCreate'
import Orders from '../Components/Orders/Orders'

function Routes(): JSX.Element {
	return (
		<div>
			<Switch>
				<Route path='/order/new' exact component={OrderCreate} />
				<Route path='/orders/:id' exact component={OrderDetails} />
				<Route path='/orders' exact component={Orders} />
			</Switch>
		</div>
	)
}

export default Routes
