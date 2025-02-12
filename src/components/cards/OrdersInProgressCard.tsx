"use client";

interface Order {
  id: string;
  no: number;
  name: string;
  location: string;
  orderId: string;
}

const defaultOrders: Order[] = [
  { id: '1', no: 1, name: 'Chisom', location: 'Lugbe', orderId: '1256' },
  { id: '2', no: 2, name: 'Daniel', location: 'Wuse 2', orderId: '4590' },
  { id: '3', no: 3, name: 'Temitayo', location: 'Kubwa', orderId: '7834' },
  { id: '4', no: 4, name: 'Olu', location: 'Life Camp', orderId: '9083' },
  { id: '5', no: 5, name: 'Daniel', location: 'Wuse 2', orderId: '4590' },
  { id: '6', no: 6, name: 'Temitayo', location: 'Kubwa', orderId: '7834' },
  { id: '7', no: 7, name: 'Olu', location: 'Wuse 2', orderId: '9083' },
];

export const OrdersInProgressCard = () => {
  return (
    <div className="w-full sm:min-w-[300px] lg:min-w-[331.99px] bg-white rounded-[7.37px] shadow-[0px_3.68px_27.64px_0px_#8362EA0D] p-4 sm:p-[20.27px]">
      <h2 className="font-raleway text-base sm:text-[18.42px] font-semibold leading-[27.64px] tracking-[0.01em] text-black mb-4 sm:mb-[20.27px]">
        Order in Progress
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#EAECF0]">
              <th className="py-2 sm:py-[10px] pr-2 sm:pr-4 text-left font-raleway text-xs sm:text-[12.04px] font-semibold leading-[14.13px] text-black">No</th>
              <th className="py-2 sm:py-[10px] px-2 sm:px-4 text-left font-raleway text-xs sm:text-[12.04px] font-semibold leading-[14.13px] text-black">Name</th>
              <th className="py-2 sm:py-[10px] px-2 sm:px-4 text-left font-raleway text-xs sm:text-[12.04px] font-semibold leading-[14.13px] text-black">Location</th>
              <th className="py-2 sm:py-[10px] pl-2 sm:pl-4 text-left font-raleway text-xs sm:text-[12.04px] font-semibold leading-[14.13px] text-black">Order ID</th>
            </tr>
          </thead>
          <tbody>
            {defaultOrders.map((order) => (
              <tr key={order.id} className="border-b border-[#EAECF0] last:border-b-0">
                <td className="py-2 sm:py-[10px] pr-2 sm:pr-4">
                  <span className="font-raleway text-xs sm:text-[12.04px] font-semibold leading-[14.13px] text-[#F46702]">
                    {order.no}
                  </span>
                </td>
                <td className="py-2 sm:py-[10px] px-2 sm:px-4">
                  <span className="font-raleway text-xs sm:text-[12.04px] font-semibold leading-[14.13px] text-black">
                    {order.name}
                  </span>
                </td>
                <td className="py-2 sm:py-[10px] px-2 sm:px-4">
                  <span className="font-raleway text-xs sm:text-[12.04px] font-semibold leading-[14.13px] text-black">
                    {order.location}
                  </span>
                </td>
                <td className="py-2 sm:py-[10px] pl-2 sm:pl-4">
                  <span className="font-raleway text-xs sm:text-[12.04px] font-semibold leading-[14.13px] text-black whitespace-nowrap">
                    #{order.orderId}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};