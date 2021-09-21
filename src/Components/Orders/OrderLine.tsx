import React from 'react'
import { OrderLines } from '../../types/types'

interface Props {
  line: OrderLines
}
export default function OrderLine({ line }: Props):JSX.Element {
	return (
		<div>
			<div data-testid="line-info" className="description">
				{line.description} ({line.code}) x {line.quantity} : {line.price}
			</div>
		</div>
	)
}
