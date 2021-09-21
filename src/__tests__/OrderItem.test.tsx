import React from 'react'
import { expect } from '@jest/globals'
import { render } from '@testing-library/react'
import OrderItem from '../Components/Orders/OrderItem'
import '@testing-library/jest-dom'

it('displays an OrderItem correctly', async () => {
	const orderItem:any = {
		'id': 'fdcc4d75',
		'orderLines': [
			{
				'id': '71dc2c9b',
				'code': 'A102391203',
				'description': 'Pretty shoes',
				'quantity': 1,
				'price': 123
			},
			{
				'id': '562a1678',
				'code': '123989ads0',
				'description': 'Pretty hat',
				'quantity': 1,
				'price': 123
			}
		],
		'transactions': [],
		'orderAmount': 246,
		'settledAmount': 0
	}
	const orderLineComponent = render(<OrderItem orderItem={orderItem} key={0} />)
	const orderTitle = orderLineComponent.getByTestId('order-title')
	const orderAmount = orderLineComponent.getByTestId('order-amount')
 
	expect(orderTitle && orderAmount).toBeTruthy()
	expect(orderTitle.textContent).toContain('fdcc4d75')
	expect(orderAmount.textContent).toContain(246)
})