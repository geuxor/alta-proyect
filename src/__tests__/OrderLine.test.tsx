import React from 'react'
import { expect } from '@jest/globals'
import { render } from '@testing-library/react'
import OrderLine from '../Components/Orders/OrderLine'
import '@testing-library/jest-dom'

it('displays OrderLines correctly', async () => {
	const line = {
		id: '562a1678-4a23-4e04-b202-179c22890712',
		code: '123989ads0',
		description: 'Pretty hat',
		quantity: 1,
		price: 123,
	}
	const orderLineComponent = render(<OrderLine line={line} />)

	const lineInfo = orderLineComponent.getByTestId('line-info')
	expect(lineInfo).toBeTruthy()
	expect(lineInfo.textContent).toContain('Pretty hat')
})
