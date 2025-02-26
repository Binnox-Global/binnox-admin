"use client";

interface Transaction {
  type: 'Revenue' | 'Expenses';
  amount: number;
  date: string;
  time: string;
}

const transactions: Transaction[] = [
  { type: 'Revenue', amount: 940, date: '22 Mar', time: '7:20 PM' },
  { type: 'Revenue', amount: 940, date: '22 Mar', time: '7:20 PM' },
  { type: 'Revenue', amount: 940, date: '22 Mar', time: '7:20 PM' },
  { type: 'Expenses', amount: 280000, date: '22 Mar', time: '7:20 PM' },
  { type: 'Revenue', amount: 940, date: '22 Mar', time: '7:20 PM' },
  { type: 'Revenue', amount: 940, date: '22 Mar', time: '7:20 PM' },
  { type: 'Revenue', amount: 940, date: '22 Mar', time: '7:20 PM' },
  { type: 'Revenue', amount: 940, date: '22 Mar', time: '7:20 PM' },
  { type: 'Expenses', amount: 280000, date: '22 Mar', time: '7:20 PM' },
];

export const RecentTransactions = () => {
  return (
    <div className="bg-black text-white rounded-[15px] p-6 inline-block w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[18px] font-semibold">Recent Transactions</h2>
        <button className="text-[14px] text-[#FF3D00] hover:text-[#FF5C33]">View all</button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center justify-between py-1">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                transaction.type === 'Revenue' ? 'bg-[#1A9882]' : 'bg-[#FF3D00]'
              }`}>
                {transaction.type === 'Revenue' ? (
                  <svg 
                    className="w-4 h-4" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path 
                      d="M12 4V20M12 20L18 14M12 20L6 14" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg 
                    className="w-4 h-4" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path 
                      d="M12 20V4M12 4L6 10M12 4L18 10" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <div>
                <p className="text-[14px] font-medium">{transaction.type}</p>
                <p className="text-[12px] text-[#858D9D]">{transaction.date} {transaction.time}</p>
              </div>
            </div>
            <span className="text-[14px] font-medium">
              ₦{transaction.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
} 