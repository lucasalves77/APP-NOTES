import React, { useState } from 'react';

const Title: React.FC = () => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 100) {
      setText(inputValue);
    }
  };

  const autoResize = (element: HTMLTextAreaElement | null) => {
    if (element) {
      element.style.height = 'auto'; 
      element.style.height = element.scrollHeight + 'px'; 
    }
  };

  return (
    <div className='w-full mt-5'>
      <textarea 
        value={text} 
        ref={(textarea) => autoResize(textarea)} 
        onChange={handleChange} 
        id="texto" 
        rows={1}
        placeholder="Titulo" 
        className="outline-none text-zinc-200 bg-transparent resize-none text-[2.2rem] w-full font-bold"
        maxLength={100} 
      />
    </div>
  );
};

export default Title;
