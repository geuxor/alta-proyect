import React, { useEffect, useState } from "react";
import ShopApi from "../../ApiServices/orderService";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import OrderLine from "./OrderLine";
import { Card } from "antd";
import Transaction from "./Transaction";
import { OrderTransactions, OrdersInterface } from '../../types/types';

export default function OrderItem() {
  const [loading, setLoading] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState<string[]>([]);
  const [orderDetails, setOrderDetails] = useState<OrdersInterface | undefined>();
  const [amountDiff, setAmountDiff] = useState<any>(20);
  const [settledAmount, setSettledAmount] = useState<number | undefined>();
  const [transactions, setTransactions] = useState<OrderTransactions[] | undefined>();
  const [inputValue, setInputValue] = useState(0);

  const { id } = useParams<{id?: string}>();
  const transactionAmount = { amount: 0 };
  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        const orderDetailsRes = await ShopApi.getOrderDetails(id);
        setOrderDetails(orderDetailsRes.data);
        setLoading(false);
        setSettledAmount(orderDetailsRes.data.settledAmount);
        setTransactions(orderDetailsRes.data.transactions);
        disableButtons(orderDetailsRes.data.transactions);
        setAmountDiff(
          orderDetailsRes.data.orderAmount - orderDetailsRes.data.settledAmount
        );
      } catch (err: any) {
        if (err.response && err.response.status >= 400) {
          toast.error("Order " + err.response.statusText);
          history.push("/");
        } else {
          toast.error("Error occurred");
        }
        setLoading(false);
      }
    })();
    // eslint-disable-next-line
  }, []);

  function disableButtons(tLength) {
    if (tLength.length > 0) {
      const uniqueTransactions = [...new Set<any>(tLength.map((item) => item.type))];
      setBtnDisabled(uniqueTransactions);
    } else {
      setBtnDisabled(["*"]);
    }
  }

  function onChange(e) {
    e.preventDefault();
    setInputValue(e.target.value);
  }

  async function onClick(e, type) {
    e.preventDefault();
    let res;
    transactionAmount.amount = inputValue;
    console.log("xx", !transactionAmount.amount, type);
    if (
      !transactionAmount.amount && (type === "CAPTURE" || type === "REFUND")
    ) {
      return toast.error("Please enter a value greater than 0");
    }
    try {
      if (type === "RESERVE") {
        setBtnDisabled(["RESERVE"]);
        res = await ShopApi.OrderReserve(id);
        // console.log("reserve res", res.data);
      }
      if (type === "RELEASE") {
        setBtnDisabled((prev) => [...prev, "RELEASE"]);
        res = await ShopApi.OrderRelease(id);
      }
      if (type === "CAPTURE") {
        setBtnDisabled((prev) => [...prev, "CAPTURE"]);
        // console.log("capture res", transactionAmount);
        res = await ShopApi.OrderCapture(id, transactionAmount);
        // console.log("capture res", res.data);
      }
      if (type === "REFUND") {
        res = await ShopApi.OrderRefund(id, transactionAmount);
      }
      // console.log("####", res.data);
      setTransactions((prev) => [{...prev}, res.data.transaction]);
      setSettledAmount((prev) => prev + res.data.transaction.settledAmount);
      setAmountDiff(
        (orderDetails as OrdersInterface).orderAmount -
          (settledAmount as number) -
          res.data.transaction.settledAmount
      );

      setInputValue(0);
    } catch (err: any) {
      if (err.response && err.response.status >= 400) {
        // console.log("ERRRR1", err.response.data);
        toast.error("Order " + err.response.data.message);
      } else {
        // console.log("ERRRR2", err);
        toast.error("Error occurred");
      }
    }
  }

  function containsAll(needles) {
    for (let i = 0; i < needles.length; i++) {
      if (btnDisabled.includes(needles[i])) return true;
    }
    return false;
  }

  return (
    <div className="order-list">
      {loading ? (
        <p>waiting...</p>
      ) : (
        <>
          <Card>
            <div className="order-list-item">
              <h2 className="title">Order: {(orderDetails as OrdersInterface).id}</h2>
              <div style={{ textAlign: "left", padding: "50px" }}>
                {(orderDetails as OrdersInterface).orderLines && (
                  <>
                    {(orderDetails as any).orderLines.map((l, i) => {
                      return <OrderLine key={i} line={l} />;
                    })}
                  </>
                )}
                <div>Order Amount: {(orderDetails as OrdersInterface).orderAmount}</div>
                <div>Settled Amount: {settledAmount}</div>
                <div>
                  <h3 className="title">
                    <b>Transactions:</b>
                  </h3>
                  <div>
                    {transactions && (
                      <>
                        {transactions.map((t, i) => {
                          return <Transaction key={i} transactionData={t} />;
                        })}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <form>
                <button
                  className="redbutton"
                  type="submit"
                  disabled={containsAll(["RESERVE"]) && true}
                  onClick={(e) => onClick(e, "RESERVE")}
                >
                  Reserve
                </button>
                <button
                  className="bluebutton"
                  type="submit"
                  disabled={containsAll(["*", "RELEASE", "CAPTURE"]) && true}
                  onClick={(e) => onClick(e, "RELEASE")}
                >
                  Release
                </button>
                <br />
                <br />
                <button
                  className="redbutton"
                  type="submit"
                  disabled={
                    (containsAll(["*", "RELEASE"]) || settledAmount as number < 2) && true
                  }
                  onClick={(e) => onClick(e, "REFUND")}
                >
                  Refund (max: {settledAmount as number - 1})
                </button>

                <input
                  style={{ padding: "10px", margin: "0px 0px", color: "blue" }}
                  type="number"
                  min={1}
                  value={inputValue}
                  onChange={onChange}
                />

                <button
                  className="bluebutton"
                  type="submit"
                  disabled={
                    (containsAll(["*", "RELEASE"]) || amountDiff === 0) && true
                  }
                  onClick={(e) => onClick(e, "CAPTURE")}
                >
                  Capture (max: {amountDiff})
                </button>
              </form>
            </div>
          </Card>
        </>
      )}
    </div>
  );
}
