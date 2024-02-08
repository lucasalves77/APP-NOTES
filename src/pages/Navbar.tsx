import { Bell, ClipboardText, Clock, Gear, Heart, Pen, SquaresFour, Trash } from "@phosphor-icons/react";
import { useState } from 'react';
import  ToggleSwitch  from "../components/ToggleSwitch";
import {Folders} from '../components/Folders';

type ButtonName = 'Bell' | 'ClipboardText' | 'Clock' | 'Heart' | 'Pen' | 'SquaresFour' | 'Trash';

export function Navbar(): JSX.Element {

  const [activeButton, setActiveButton] = useState<ButtonName | null>(null);

  const handleButtonClick = (buttonName: ButtonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="bg-neutral-900 p-4 flex flex-col relative border-r-[2px] border-r-neutral-800 h-screen ">
      <div className="flex items-center gap-3">
        <div className="w-[35px] h-[35px] rounded-full bg-neutral-800"></div>
        <p className="text-zinc-200">Lucas Alves</p>
      </div>
      <div>
        <div className="mt-16 flex flex-col gap-[2px]">
        <p className="mb-[10px] px-[14px] text-zinc-200">Quick links</p>
        <button className={`text-zinc-200 ${activeButton === 'ClipboardText' ? 'bg-gradient-to-l to-blue-500 from-sky-400 ' : ''} flex items-center gap-3 px-[12px] h-[30px] rounded-full text-[0.9rem]  hover:bg-neutral-800`}
           onClick={() => handleButtonClick('ClipboardText')}>
          <ClipboardText className="text-zinc-200" size={18} />
          All notes
        </button>
        <button className={`text-zinc-200 ${activeButton === 'Bell' ? 'bg-gradient-to-l to-blue-500 from-sky-400' : ''} flex items-center gap-3 px-[12px] h-[30px] rounded-full text-[0.9rem] hover:bg-neutral-800`}
           onClick={() => handleButtonClick('Bell')}>
          <Bell className="text-zinc-200" size={18} />
          Reminders
        </button>
        <button className={`text-zinc-200 ${activeButton === 'SquaresFour' ? 'bg-gradient-to-l to-blue-500 from-sky-400' : ''} flex items-center gap-3 px-[12px] h-[30px] rounded-full text-[0.9rem] hover:bg-neutral-800`}
           onClick={() => handleButtonClick('SquaresFour')}>
          <SquaresFour className="text-zinc-200" size={18} />
          Tasks
        </button>
        <button className={`text-zinc-200 ${activeButton === 'Heart' ? 'bg-gradient-to-l to-blue-500 from-sky-400' : ''} flex items-center gap-3 px-[12px] h-[30px] rounded-full text-[0.9rem] hover:bg-neutral-800`}
           onClick={() => handleButtonClick('Heart')}>
          <Heart className="text-zinc-200" size={18} />
          Favorites
        </button>
        <button className={`text-zinc-200 ${activeButton === 'Pen' ? 'bg-gradient-to-l to-blue-500 from-sky-400' : ''} flex items-center gap-3 px-[12px] h-[30px] rounded-full text-[0.9rem] hover:bg-neutral-800`}
           onClick={() => handleButtonClick('Pen')}>
          <Pen className="text-zinc-200" size={18} />
          Highlights
        </button>
        <button className={`text-zinc-200 ${activeButton === 'Clock' ? 'bg-gradient-to-l to-blue-500 from-sky-400' : ''} flex items-center gap-3 px-[12px] h-[30px] rounded-full text-[0.9rem] hover:bg-neutral-800`}
           onClick={() => handleButtonClick('Clock')}>
          <Clock className="text-zinc-200" size={18} />
          Activity
        </button>
        <button className={`text-zinc-200 ${activeButton === 'Trash' ? 'bg-gradient-to-l to-blue-500 from-sky-400' : ''} flex items-center gap-3 px-[12px] h-[30px] rounded-full text-[0.9rem] hover:bg-neutral-800`}
           onClick={() => handleButtonClick('Trash')}>
          <Trash className="text-zinc-200" size={18} />
          Trash
        </button>
      </div>
     
      <Folders/>

      </div>
      <div className="absolute w-full left-0 p-4 bottom-0">
        <div className="flex items-center w-full justify-between">
          <button>
          <Gear className=" text-zinc-200" size={20} />
          </button>
          <ToggleSwitch/>
        </div>
      </div>
    </div>
  )
}

