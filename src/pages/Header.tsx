import { CaretDown, Folder, Tag } from "@phosphor-icons/react";
import {ConfigContent} from "../components/buttonHeader/ConfigContent"
import {FullScreen} from "../components/buttonHeader/FullScreen"
import {Share} from "../components/buttonHeader/Share"
import {Notification} from "../components/buttonHeader/Notification"
import {Upload} from "../components/buttonHeader/Upload"
import {Tasks} from "../components/buttonHeader/Tasks"


export function Header() {
  return (
    <div className="h-[50px] px-4	flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Folder className="text-zinc-200" size={18} />
          <p className="text-zinc-200 text-[0.9rem] ">My folders</p>
          <CaretDown className="text-zinc-200" weight="fill" size={16} />
        </div>    
        <div className="flex items-center gap-2">
          <Tag className="text-zinc-200" size={18} />
          <p className="text-zinc-200 text-[0.9rem]">Add tags</p>
        </div>
      </div>
      <div className="flex">
        <Upload/>
        <Tasks/>
        <Notification/>
        <Share/>
        <FullScreen/>
        <ConfigContent/>
      </div>
    </div>
  )
}
