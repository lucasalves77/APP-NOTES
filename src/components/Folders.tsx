import { Plus, X, Trash, Pen, Folder } from "@phosphor-icons/react";
import { useState, useRef, useEffect } from "react";
import 'overlayscrollbars/overlayscrollbars.css';


export function Folders() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [folders, setFolders] = useState<string[]>([]);
  const [newFolderName, setNewFolderName] = useState("");
  const [editedFolderName, setEditedFolderName] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsPopoverOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverRef]);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const createFolder = () => {
    if (newFolderName.trim() !== "") {
      setFolders(prevFolders => [...prevFolders, newFolderName]);
      setNewFolderName("");
      setIsPopoverOpen(false);
    }
  };

  const editFolder = (index: number) => {
    setEditingIndex(index);
    setEditedFolderName(folders[index]);
  };

  const saveEditedFolder = () => {
    if (editedFolderName.trim() !== "") {
      const updatedFolders = [...folders];
      updatedFolders[editingIndex as number] = editedFolderName;
      setFolders(updatedFolders);
      setEditingIndex(null);
    }
  };

  const deleteFolder = (index: number) => {
    const updatedFolders = [...folders];
    updatedFolders.splice(index, 1);
    setFolders(updatedFolders);
  };

  const handleFolderNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (editingIndex !== null) {
      setEditedFolderName(event.target.value);
    } else {
      setNewFolderName(event.target.value);
    }
  };

  return (
    < >
      <div className=" gap-2 grid grid-rows-[30px_1fr] h-full" ref={popoverRef}>
        <div className="flex items-center justify-between pr-2">
          <p className="text-zinc-200 font-bold">Folders</p>
          <button
            onClick={togglePopover}
            className="hover:bg-neutral-800 flex justify-center items-center w-[30px] h-[30px] rounded-full"
          >
            {isPopoverOpen ? (
              <X size={18} className="text-zinc-200" />
            ) : (
              <Plus size={18} className="text-zinc-200" />
            )}
          </button>
        </div>
        {isPopoverOpen && (
          <div className="w-[204px] mr-[-16px] absolute z-30 bg-neutral-900 border mt-2 rounded-md px-2 py-4 border-neutral-700  ">
            <div className="grid gap-4 ">
              <div className="space-y-2">
                <h4 className=" text-zinc-200">Criar pasta</h4>
              </div>
              <div className="grid gap-2">
                <div className="w-full">
                  <input
                  placeholder="Nome da pasta"
                    type="text"
                    value={newFolderName}
                    onChange={handleFolderNameChange}
                    className="w-full px-[10px] h-[30px] text-zinc-200 text-[14px] outline-none rounded-md bg-neutral-800"
                  />
                </div>
                <button onClick={createFolder} className="bg-blue-500 text-white px-4 h-[30px] rounded-md hover:bg-blue-600">
                  Criar
                </button>
              </div>
            </div>
          </div>
        )}
        <div id="scrollBar" className="pr-1">
          {folders.map((folder, index) => (
            <div
              key={index}
              className="grid grid-cols-[20px_1fr] pl-2 pr-1 rounded-md hover:bg-neutral-800 cursor-pointer z-20 h-[30px] items-center justify-between mb-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div>
                <Folder size={16} className="text-zinc-200" />
              </div>
              <div className="relative flex  items-center">
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editedFolderName}
                    onChange={handleFolderNameChange}
                    className=" h-[30px] w-full text-[14px] text-zinc-200 outline-none bg-transparent "
                  />
                ) : (
                  <>
                    <p className="text-zinc-200 text-[14px] select-none flex items-center h-[30px]">{folder}</p>
                  </>
                )}
                <div className="flex items-center absolute inset-y-0 right-0 ">
                  <>
                    {editingIndex === index ? (
                      <button onClick={saveEditedFolder} className="text-green-500 hover:text-green-600">
                        <Pen size={16} />
                      </button>
                    ) : (
                      <>
                        {hoveredIndex === index && (
                          <div className="flex gap-1 w-full">
                            <button
                              onClick={() => editFolder(index)}
                              className="text-zinc-200 hover:text-blue-500 transition-colors duration-400 ease-in-out"
                            >
                              <Pen size={16} />
                            </button>
                            <button
                              onClick={() => deleteFolder(index)}
                              className="text-zinc-200 hover:text-red-600 transition-colors duration-400 ease-in-out"
                            >
                              <Trash size={16} />
                            </button>
                          </div>  
                        )}
                      </>
                    )}
                  </>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
