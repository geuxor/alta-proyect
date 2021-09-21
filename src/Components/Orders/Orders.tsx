import React, { useEffect, useState } from "react";
import ShopApi from "../../ApiServices/orderService";
import OrderItem from "./OrderItem";
import { OrdersInterface } from '../../types/types';

export default function Orders() {
  const [loading, setLoading] = useState<boolean>(true);
  const [orders, setOrders] = useState<OrdersInterface[]>([])

  useEffect(() => {
    (async () => {
      try {
        const allOrders = await ShopApi.getOrders();
        // console.log(allOrders);
        setOrders(allOrders.data);
        setLoading(false);
      } catch (err: any) {
        if (err.response && err.response.status >= 400) {
          console.log(err.response.data.message);
        } else {
        }
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="container">
      <h2>List of Orders</h2>
      {loading ? (
        <p>waiting...</p>
      ) : (
        <>
          {!orders ? (
            <div>No Orders to display</div>
          ) : (
            <>
                    
              {orders.map((o, i) => {
                return <OrderItem key={i} orderItem={o} />;
              })}
            </>
          )}
        </>
      )}
    </div>
  );
}
