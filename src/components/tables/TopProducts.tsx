interface Product {
  id: string;
  name: string;
  category: string;
  sales: string;
}

const products: Product[] = [
  { id: "01", name: "Home Decor", category: "Accessories", sales: "46%" },
  { id: "02", name: "Snacks", category: "Food", sales: "17%" },
  { id: "03", name: "Snacks", category: "Food", sales: "17%" },
  { id: "04", name: "Egusi Soup", category: "Food", sales: "19%" },
  { id: "05", name: "Egusi Soup", category: "Food", sales: "19%" },
  { id: "06", name: "iPhone 15 Pro", category: "Gadget", sales: "19%" },
];

export const TopProducts = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Top Products</h2>
        <button className="rounded-full px-4 py-2 bg-[#F4F4F4] text-sm">
          View more
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-[#EAECF0]">
            <th className="text-left py-2 font-medium text-base">#</th>
            <th className="text-left py-2 font-medium text-base">Name</th>
            <th className="text-left py-2 font-medium text-base">Category</th>
            <th className="text-right py-2 font-medium text-base">Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-[#EAECF0]">
              <td className="py-3 text-sm">{product.id}</td>
              <td className="py-3 text-sm">{product.name}</td>
              <td className="py-3 text-sm">{product.category}</td>
              <td className="py-3 text-right">
                <span className="rounded-full px-3 py-1 bg-[#FFF1E8] text-[#F46702] text-sm">
                  {product.sales}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};