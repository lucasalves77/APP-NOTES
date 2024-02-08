import { Bell } from "@phosphor-icons/react"

export function Notification() {
  return (
    <>
       <button className="p-2 hover:bg-neutral-700 rounded-full">
          <Bell className="text-zinc-200" size={18} />
        </button>
    </>
  )
}
