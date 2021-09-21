import React from 'react'
import { toast } from 'react-toastify'
import ShopApi from '../../ApiServices/orderService'
import { Form, Input, Button, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { OrdersInterface } from '../../types/types'

const CreateOrder: React.FunctionComponent = () => {
	const onFinish = async (values: OrdersInterface) => {
		if (!values.orderLines) return toast.error('Please create an order item')
		try {
			const dbres = await ShopApi.OrderCreate(values)

			toast.success(dbres.statusText)
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			console.log(err)
			toast.error(err.response.data)
		}
	}

	return (
		<div className="container">
			<h2>Create New Order</h2>

			<Form name="create_order" onFinish={onFinish} autoComplete="off">
				<Form.List name="orderLines">
					{(fields, { add, remove }) => (
						<>
							{fields.map(({ key, name, fieldKey, ...restField }) => (
								<Space
									key={key}
									style={{ display: 'flex', marginBottom: 8 }}
									align="baseline"
								>
									<Form.Item
										{...restField}
										name={[name, 'code']}
										fieldKey={[fieldKey, 'code']}
										rules={[{ required: true, message: 'Missing code' }]}
									>
										<Input placeholder="code" />
									</Form.Item>

									<Form.Item
										{...restField}
										name={[name, 'description']}
										fieldKey={[fieldKey, 'description']}
										rules={[{ required: true, message: 'Missing description' }]}
									>
										<Input placeholder="description" />
									</Form.Item>
									<Form.Item
										{...restField}
										name={[name, 'quantity']}
										fieldKey={[fieldKey, 'quantity']}
										rules={[{ required: true, message: 'Missing quantity' }]}
									>
										<Input placeholder="quantity" />
									</Form.Item>
									<Form.Item
										{...restField}
										name={[name, 'price']}
										fieldKey={[fieldKey, 'price']}
										rules={[{ required: true, message: 'Missing price' }]}
									>
										<Input placeholder="price" />
									</Form.Item>
									<MinusCircleOutlined onClick={() => remove(name)} />
								</Space>
							))}
							<Form.Item>
								<Button
									type="dashed"
									onClick={() => add()}
									block
									icon={<PlusOutlined />}
								>
                  Add order fields
								</Button>
							</Form.Item>
						</>
					)}
				</Form.List>
				<Form.Item>
					<Button type="primary" htmlType="submit">
            Save
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default CreateOrder
