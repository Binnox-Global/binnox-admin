"use client";
import React from "react";
import { useParams } from "next/navigation";
import OrderDetails from "@/components/DialogComponent/OrderDetails";

function OrderPage() {
  const params = useParams();
  const { orderId } = params;
  console.log({ params });
  return (
    <div>
      {/* <h1>Order ID: {orderId}</h1> */}
      {/* Render order details based on the ID */}
      <OrderDetails />
    </div>
  );
}

export default OrderPage;
