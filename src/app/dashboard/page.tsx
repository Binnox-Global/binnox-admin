import { DialogComponent } from "@/components/DialogComponent";
import WithdrawalDetails from "@/components/DialogComponent/WithdrawalDetails";

export default function DashboardPage() {
  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold">Welcome to the Admin Dashboard</h2>
      <p className="mt-2">Manage users, settings, and more.</p>
      <div className="flex">
        <DialogComponent
          title="Dialog Title"
          trigger={<button>Open Dialog</button>}
        >
          <WithdrawalDetails />
        </DialogComponent>
      </div>
    </div>
  );
}
