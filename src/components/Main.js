export default function Main({className, title = "Title", subtitle = false, children }) {
  return (
    <div className={className}>
      <main className="w-full bg-white rounded-xl border border-[#90caf983]">
        <div className={`p-5 font-medium ${subtitle ? "text-sm" : "text-lg"}`}>
          {title}
        </div>
        <div className="w-full h-[1px] bg-[#EEEEEE]" />
        <div className="p-5">{children}</div>
      </main>
    </div>
  );
}
