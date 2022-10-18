import useGlobalState from "../hooks/useGlobalState";

export default function Main({className, title = "Title", subtitle = false, children }) {
  const {themeColor}=useGlobalState()
  return (
    <div className={className}>
      <main className={`w-full ${themeColor.theme === "dark"?"bg-[#E3F2FD]":"bg-white"} rounded-xl border border-[#90caf983]`}>
        <div className={`p-5 font-medium ${subtitle ? "text-sm" : "text-lg"}`}>
          {title}
        </div>
        <div className="w-full h-[1px] bg-[#EEEEEE]" />
        <div className="p-5">{children}</div>
      </main>
    </div>
  );
}
