export interface OrderLines {
        id: string,
        code: string,
        description: string,
        quantity: number,
        price: number
      }

export interface OrderTransactions {
        id: string,
        date: string,
        amount: number,
        type: string,
        settledAmount: number
      }

export interface OrdersInterface {
    id: string,
    orderLines: OrderLines
    transactions: OrderTransactions,
    orderAmount: number,
    settledAmount: number
  }

export interface Props {
  orderItem: OrdersInterface
}
export interface OrderAmountInterface {
  amount: number;
}