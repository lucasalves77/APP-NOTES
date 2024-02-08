import { Plus } from "@phosphor-icons/react";

export function Folders() {
  return (
    <div>
        <div className="mt-[30px] flex justify-between items-center">
        <p className="px-[14px] text-zinc-200">Folders</p>
        <button className="hover:bg-neutral-800 flex justify-center items-center w-[30px] h-[30px] rounded-full">
          <Plus size={18} className=" text-zinc-200" />
        </button>
        
      </div>
    </div>
  )
}

