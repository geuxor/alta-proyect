import React, { useEffect, useState } from "react";
// import moment from "moment";
import { useHistory } from "react-router";
import OrderLine from "./OrderLine";
import { Button, Card } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { OrdersInterface, OrderLines } from '../../types/types';

interface Props {
  orderItem: OrdersInterface
}

export default function OrderItem({ orderItem }:Props) {
  const history = useHistory();
  const [orderLines, setOrderLines] = useState<OrderLines[]>([]);

  useEffect(() => {
    if ((orderItem as OrdersInterface).orderLines) setOrderLines((orderItem as OrdersInterface).orderLines as any);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="order-list" data-testid="one-order">
      <Card bordered={true} style={{ width: 500 }}>
        <div className="order-list-item">
          <h3 className="title">
            <b data-testid="order-title">Order: {orderItem.id}</b>
          </h3>
          <div data-testid="order-amount">
            Order Amount: {(orderItem as OrdersInterface).orderAmount}.-{" "}
            {process.env.REACT_APP_CURRENCY}
          </div>
          <div>
            Settled Amount: {orderItem.settledAmount}.-{" "}
            {process.env.REACT_APP_CURRENCY}
          </div>
          {orderLines && (
            <>
              {orderLines.map((l, i) => {
                return <OrderLine key={i} line={l} />;
              })}
            </>
          )}
        </div>
        <Button
          onClick={() => history.push(`/orders/${orderItem.id}`)}
          type="primary"
          icon={<SettingOutlined />}
        >
          More Details
        </Button>
      </Card>
    </div>
  );
}
