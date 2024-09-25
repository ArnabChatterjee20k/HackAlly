import { Search } from "lucide-react";
export default function SearchPopup() {
  return (
    <div className="bg-white w-[60%] p-3 mx-auto flex items-center rounded-lg shadow-sm">
      <div className="bg-gray-100 flex gap-2 p-5 w-[80%] rounded-md border border-blue-200 cursor-pointer hover:border-blue-500 transition ease-linear duration-75">
        <Search color="gray"/>
        <p className="text-xl font-bold text-gray-400">Type to search or use the shortcut</p>
      </div>
      <div className="flex items-center gap-3 px-4">
        <div className="bg-gray-100 font-bold text-xl py-3 px-6 rounded-md border-2 border-blue-800/40">CTRL</div>
        <span className="text-base font-bold">+</span>
        <div className="bg-gray-100 font-bold text-xl py-3 px-6 rounded-md border-2 border-blue-800/40">k</div>
      </div>
    </div>
  );
}
