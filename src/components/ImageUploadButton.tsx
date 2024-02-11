import React, { useState } from 'react';
import { Input } from "../components/ui/input";
import { Image } from '@phosphor-icons/react';

const ImageUploadButton: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [showCoverButton, setShowCoverButton] = useState<boolean>(false);
  const [divHeight, setDivHeight] = useState<string>('100px'); // Estado para a altura da div principal

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setImage(imageDataUrl);
        setDivHeight('260px'); // Define a altura para 240px quando uma imagem é selecionada
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setDivHeight('100px'); // Define a altura de volta para 100px quando a imagem é removida
    setShowCoverButton(false); // Esconde o botão "Add cover" quando a imagem é removida
  };

  return (
    <div className={`mt-2 relative`} style={{ height: divHeight }}  // Utiliza a classe condicional para definir a altura
        onMouseEnter={() => setShowCoverButton(true)}
        onMouseLeave={() => setShowCoverButton(false)}
        >
        {image && (
          <div className='w-full relative h-[260px]'>
            <img src={image} alt="Imagem adicionada" className='rounded-[10px] w-full h-full' /> 
            {showCoverButton && (
              <div className='absolute m-2 bottom-0 right-0 flex'>
                <label className='flex items-center text-[12px] py-1 px-2 rounded-l bg-neutral-800 hover:bg-neutral-700 border-r-[1px] border-r-neutral-700 cursor-pointer gap-1 text-zinc-200' htmlFor="cover">Change cover</label>
                <Input id="cover" name="cover" className='mt-2 bg-neutral-700 hidden' type="file" accept="image/*" onChange={handleImageChange} />
                <button className='text-zinc-200 rounded-r py-1 px-2 bg-neutral-800 hover:bg-neutral-700 text-[12px]' onClick={handleRemoveImage}>Remove image</button>
              </div>
            )}
          </div>
        )}
        
        {showCoverButton && !image && ( // Adiciona esta verificação para mostrar o botão "Add cover" apenas se não houver imagem
          <div className='absolute bottom-0 mb-2'>
            {!image && (
            <label className='flex rounded py-1 px-2 hover:bg-neutral-700 items-center gap-1 cursor-pointer text-zinc-200 text-[12px]' htmlFor="cover"><Image className="text-zinc-200 cursor-pointer" size={18} />Add cover</label>
            )}
            <Input id="cover" name="cover" className='mt-2 bg-neutral-700 hidden' type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        )}
      </div>
  );
};

export default ImageUploadButton;
