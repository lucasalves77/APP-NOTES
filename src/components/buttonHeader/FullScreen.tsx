import { ArrowsOutSimple } from "@phosphor-icons/react"

export function FullScreen() {
  return (
    <>
      <button className="p-2 hover:bg-neutral-700 rounded-full">
        <ArrowsOutSimple className="text-zinc-200" size={18} />
      </button>
    </>
  )
}

