import React from 'react'
import { render, screen } from '@testing-library/react'
import Orders from '../Components/Orders/Orders'
import { BrowserRouter } from 'react-router-dom'

const MockOrders = () => {
	return (
		<BrowserRouter>
			<Orders />
		</BrowserRouter>
	)
}

describe('Show list of orders', () => {
	beforeEach(() => {
		jest.mock('../__mocks__/axios')
	})

	it.only('should render list of orders', async () => {
		render(<MockOrders />)
		const findTitle = await screen.findByText(/List of Orders/i)
		expect(findTitle).toBeInTheDocument()
	})
})
