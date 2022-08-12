import { FaClipboardList } from "react-icons/fa";
export default function ButtonLink({icon=<FaClipboardList/>,title="title"}) {
  return (
    <button
      className={`transition ease-in-out delay-75 text-[#616161] w-full pl-6 pr-4 py-[10px] mb-1 rounded-[12px] flex items-center hover:bg-[#EDE7F6] hover:text-[#673AB7]`}
    >
      <div className="mr-3 my-1">
        {icon}
      </div>
      <p className="font-medium text-sm my-1">{title}</p>
    </button>
  );
}
