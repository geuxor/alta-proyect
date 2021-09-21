import axios from 'axios'
import {OrdersInterface, OrderAmountInterface} from '../types/types'

const ShopApi:any = {}
type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'

interface AxtiosOptions {
  headers?: unknown,
  method?: Method
}

const options:AxtiosOptions = {
	headers: { 'Content-Type': 'application/json' },
	method: 'post'
}

ShopApi.getOrders = async () =>
	await axios.get('/shopOrders')

ShopApi.getOrderDetails = async (id:string) =>
	await axios.get(`/shopOrders/${id}`)

ShopApi.OrderReserve = async (id:string) =>
	await axios.post(`/shopOrders/${id}/reserve`, options)

ShopApi.OrderCapture = async (id:string, amount:OrderAmountInterface) =>
	await axios.post(`/shopOrders/${id}/capture`, amount, options)

ShopApi.OrderRefund = async (id:string, amount:OrderAmountInterface) =>
	await axios.post(`/shopOrders/${id}/refund`, amount, options)

ShopApi.OrderRelease = async (id:string) =>
	await axios.post(`/shopOrders/${id}/release`, options)

ShopApi.OrderCreate = async (data:OrdersInterface) =>
	await axios.post('/shopOrders', data, options)

export default ShopApi
