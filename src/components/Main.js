export default function Main({title="Title",subtitle=false,children}) {
  return (
    
    <main className="w-full bg-white rounded-xl border border-[#90caf983]">
        <div className={`p-5 font-medium ${subtitle?"text-sm":"text-lg"}`}>{title}</div>
        <div className="w-full h-[1px] bg-[#EEEEEE]" />
        <div className="p-5">{children}</div>
    </main>

  )
}
