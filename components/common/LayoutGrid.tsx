type LayoutGridProps = {
  children: React.ReactNode;
};

export default function LayoutGrid({
  children,
}: LayoutGridProps) {
  return (
    <div className="mx-auto w-full max-w-[1600px] px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="grid grid-cols-12 gap-6">
        {children}
      </div>
    </div>
  );
}