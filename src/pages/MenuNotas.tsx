import { MagnifyingGlass, Plus } from "@phosphor-icons/react";

export function MenuNotas() {
  return (
    <div className="grid grid-rows-[50px_1fr] gap-6 px-4 h-screen bg-neutral-900">
      <div className="flex justify-between gap-3 items-center"> 
        <div className="w-full relative flex items-center">
          <MagnifyingGlass className="absolute left-3 text-zinc-200" size={20} />
          <input placeholder="Search" className="w-full pr-4 text-zinc-200  bg-neutral-800 rounded-full outline-none pl-10 h-[30px]" type="text" />
        </div>
        <button className="bg-gradient-to-l to-blue-500 from-sky-400 flex justify-center items-center w-[35px] h-[30px] rounded-full">
          <Plus size={18} className=" text-zinc-200" />
        </button> 
      </div>
      <div className="">
        <h1 className=" text-zinc-200 font-bold">All notes</h1>
      </div>
    </div>
  )
}

