import { MagnifyingGlass, Plus } from "@phosphor-icons/react";

export function MenuNotas() {
  return (
    <div className="h-screen  p-4 bg-neutral-900">
      <div className="flex justify-between gap-3 items-center"> 
        <div className="w-full relative flex items-center">
          <MagnifyingGlass className="absolute left-3 text-zinc-200" size={20} />
          <input placeholder="Search" className="w-full pr-4 text-zinc-200  bg-neutral-800 rounded-full outline-none pl-10 h-[35px]" type="text" />
        </div>
        <div className="bg-gradient-to-l to-blue-500 from-sky-400 rounded-full cursor-pointer">
          <Plus className="w-[35px] h-[35px] p-2 text-zinc-200" weight="bold"/>
        </div> 
      </div>
    </div>
  )
}

