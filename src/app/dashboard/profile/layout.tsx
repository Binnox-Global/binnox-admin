export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-[#F5F5F5] p-6">
      <div className="bg-white rounded-[10px] h-full">
        {children}
      </div>
    </div>
  );
}