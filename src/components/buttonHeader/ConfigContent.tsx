import { ArrowUUpLeft, ArrowUUpRight, CornersOut, DotsThreeOutline, Folder, Heart, PushPinSimple, Trash } from "@phosphor-icons/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Button } from "../ui/button";

export function ConfigContent() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button><DotsThreeOutline className="text-zinc-200" size={18} /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem><Heart size={18} />Add to favorites</DropdownMenuItem>
            <DropdownMenuItem><PushPinSimple size={18} />To note</DropdownMenuItem>
            <DropdownMenuItem><CornersOut size={18} />Focus mode</DropdownMenuItem>
            <DropdownMenuItem><Folder size={18} />Move folder</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
            <DropdownMenuItem><ArrowUUpLeft size={18} />Undo</DropdownMenuItem>
            <DropdownMenuItem><ArrowUUpRight size={18} />Redo</DropdownMenuItem>
          <DropdownMenuSeparator />
            <DropdownMenuItem><Trash size={18} />Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
