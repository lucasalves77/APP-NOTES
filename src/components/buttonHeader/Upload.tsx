import { Paperclip } from "@phosphor-icons/react";
import { Input } from "../ui/input"


export function Upload() {
  return (
    <>    
      <button className="p-2 hover:bg-neutral-700 rounded-full ">
        <label htmlFor="arquivo"><Paperclip className="text-zinc-200 cursor-pointer" size={18} /></label>
        <Input id="arquivo" name="arquivo" className="p-2 hover:bg-neutral-700 rounded-full hidden" type="file" />
      </button>
    </>
  )
}

 