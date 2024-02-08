import { ShareNetwork } from "@phosphor-icons/react";

export function Share() {
  return (
    <>
      <button className="p-2 hover:bg-neutral-700 rounded-full">
        <ShareNetwork className="text-zinc-200" size={18} />
      </button>
    </>
  )
}
