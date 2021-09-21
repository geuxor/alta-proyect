/* eslint-disable no-mixed-spaces-and-tabs */
const mockResponse = {
	data:
    [
    	{
    		'id': 'fdcc4d75-e119-4d5e-ad7f-a766ea7af67e',
    		'orderLines': [
    			{
    				'id': '71dc2c9b-d8bb-4263-99ff-5a1de421b30d',
    				'code': 'A102391203',
    				'description': 'Pretty shoes',
    				'quantity': 1,
    				'price': 123
    			},
    			{
    				'id': '562a1678-4a23-4e04-b202-179c22890712',
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
    ]
}

export default {
	get: jest.fn().mockResolvedValue(mockResponse)
}