import React, { useState } from "react";
import moment from "moment";
import { OrderTransactions } from '../../types/types';

interface Props {
  transactionData: OrderTransactions
}

function Transaction({ transactionData }: Props) {
  const [transaction] = useState(transactionData);
  return (
    <div>
      {transaction.type} - {moment(transaction.date).fromNow()}
      {(transaction.type === "CAPTURE" || transaction.type === "REFUND") && (
        <span
          style={
            transaction.settledAmount.toString().startsWith("-")
              ? { color: "orange" }
              : { color: "green" }
          }
        >
          {` Settled: ${transaction.settledAmount}.-${process.env.REACT_APP_CURRENCY} - Amount: ${transaction.amount}.-${process.env.REACT_APP_CURRENCY}`}
        </span>
      )}
    </div>
  );
}

export default Transaction;
