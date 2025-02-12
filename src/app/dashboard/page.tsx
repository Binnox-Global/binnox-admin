"use client";
// import Modal from "@/components/DialogComponent";
import { DialogComponent } from "@/components/DialogComponent";
import OrderDetails from "@/components/DialogComponent/OrderDetails";
import ProductDiscount from "@/components/DialogComponent/ProductDiscount";
import WithdrawalDetails from "@/components/DialogComponent/WithdrawalDetails";
import { useState } from "react";

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold">Welcome to the Admin Dashboard</h2>
      <p className="mt-2">Manage users, settings, and more.</p>
      <div className="flex">
        <DialogComponent
          title="Dialog Title"
          trigger={<button>Open Dialog</button>}
        >
          {/* <OrderDetails /> */}
          {/* <WithdrawalDetails /> */}
          <ProductDiscount />
        </DialogComponent>
      </div>
    </div>
  );
}
