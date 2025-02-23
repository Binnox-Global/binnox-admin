"use client";
import React from "react";
import { useParams } from "next/navigation";
import WithdrawalDetails from "@/components/DialogComponent/WithdrawalDetails";

function OrderPage() {
  const params = useParams();
  const { historyId } = params;
  console.log({ params });
  return (
    <div className="flex justify-center">
      {/* <h1>Order ID: {orderId}</h1> */}
      {/* Render order details based on the ID */}
      <WithdrawalDetails />
    </div>
  );
}

export default OrderPage;
