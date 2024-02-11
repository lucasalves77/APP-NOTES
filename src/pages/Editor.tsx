import { CaretDown, ChatCenteredText, Circle, Code, Eyedropper, TextB, TextItalic, TextStrikethrough } from '@phosphor-icons/react'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import { BubbleButton } from '../components/BubbleButton'
import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list'
import Document from '@tiptap/extension-document'
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"


export function Editor() {

  const editor = useEditor({
    extensions: [StarterKit, Document, TextStyle, Color, ListItem, BulletList],
    content: ``,
    editorProps: {
      attributes: {
        class: 'outline-none',
      }
    }
  })

  if (!editor) {
    return null
  }

  const handleClick = () => {
    if (editor) {
      editor.commands.focus()
    }
  }


  return (
    <>
      <EditorContent
        className='text-slate-200 px-[60px] font-normal mt-10 w-full cursor-text h-full'
        editor={editor}
        onClick={handleClick}
        spellCheck={false} 
      ></EditorContent>
      { editor && (
        <BubbleMenu className='bg-neutral-800 mx-40 w-[400px] shadow-xl border border-zinc-600 rounded-md flex divide-x divide-zinc-600' editor={editor}>
          <BubbleButton>
            Text
          <CaretDown size={13} />
          </BubbleButton>
          <BubbleButton>
            Coment
          <ChatCenteredText size={13} />
          </BubbleButton>
          <div className='flex items-center'>
          <BubbleButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            data-active={editor.isActive('bold')}
          >
            <TextB size={13} weight="bold"/>
          </BubbleButton>
          <BubbleButton 
            onClick={() => editor.chain().focus().toggleItalic().run()}
            data-active={editor.isActive('italic')}
          >
            <TextItalic size={13} weight="bold"/>
          </BubbleButton>
          <BubbleButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            data-active={editor.isActive('strike')}
          >
            <TextStrikethrough size={13} weight="bold" />
          </BubbleButton>
          <BubbleButton
            onClick={() => editor.chain().focus().toggleCode().run()}
            data-active={editor.isActive('code')}
          >
            <Code size={13} weight="bold" />
          </BubbleButton>

          </div>
            <Popover>
              <PopoverTrigger asChild>
                <button ><Eyedropper className='text-zinc-200' size={16} /></button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px]">
                <div className="flex items-start w-full gap-2 flex-col">
                  <button onClick={() => editor.chain().focus().setColor('#9333ea').run()} className={`editor.isActive('textStyle', { color: '#9333ea' }) ? 'is-active' : '' flex items-center gap-2 text-zinc-200 text-[14px] hover:bg-neutral-700 w-full`} data-testid="setRoxo"><Circle  size={14} weight="fill" className='text-purple-600 '/>Roxo</button>
                  <button onClick={() => editor.chain().focus().setColor('#1d4ed8').run()} className={`editor.isActive('textStyle', { color: '#1d4ed8' }) ? 'is-active' : '' flex items-center gap-2 text-zinc-200 text-[14px] hover:bg-neutral-700 w-full`} data-testid="setAzul"><Circle  size={14} weight="fill" className='text-blue-700' />Azul</button>
                  <button onClick={() => editor.chain().focus().setColor('#15803d').run()} className={`editor.isActive('textStyle', { color: '#15803d' }) ? 'is-active' : '' flex items-center gap-2 text-zinc-200 text-[14px] hover:bg-neutral-700 w-full`} data-testid="setVerde"><Circle  size={14} weight="fill" className='text-green-700 ' />Verde</button>
                  <button onClick={() => editor.chain().focus().setColor('#fde047').run()} className={`editor.isActive('textStyle', { color: '#fde047' }) ? 'is-active' : '' flex items-center gap-2 text-zinc-200 text-[14px] hover:bg-neutral-700 w-full`} data-testid="setAmarelo"><Circle  size={14} weight="fill" className='text-yellow-300' />Amarelo</button>
                  <button onClick={() => editor.chain().focus().setColor('#c2410c').run()} className={`editor.isActive('textStyle', { color: '#c2410c' }) ? 'is-active' : '' flex items-center gap-2 text-zinc-200 text-[14px] hover:bg-neutral-700 w-full`} data-testid="setLaranja"><Circle  size={14} weight="fill" className='text-orange-700' />Laranja</button>
                  <button onClick={() => editor.chain().focus().setColor('#c026d3').run()} className={`editor.isActive('textStyle', { color: '#c026d3' }) ? 'is-active' : '' flex items-center gap-2 text-zinc-200 text-[14px] hover:bg-neutral-700 w-full`} data-testid="setRosa"><Circle  size={14} weight="fill" className='text-fuchsia-600' />Rosa</button>
                  <button onClick={() => editor.chain().focus().setColor('#6b7280').run()} className={`editor.isActive('textStyle', { color: '#6b7280' }) ? 'is-active' : '' flex items-center gap-2 text-zinc-200 text-[14px] hover:bg-neutral-700 w-full`} data-testid="setCinza"><Circle  size={14} weight="fill" className='text-gray-500'/>Cinza</button>
                  <button onClick={() => editor.chain().focus().setColor('#b91c1c').run()} className={`editor.isActive('textStyle', { color: '#b91c1c' }) ? 'is-active' : '' flex items-center gap-2 text-zinc-200 text-[14px] hover:bg-neutral-700 w-full`} data-testid="setVermelho"><Circle  size={14} weight="fill" className='text-red-700 '/>Vermelho</button>
                </div>
            </PopoverContent>
          </Popover>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
            toggleBulletList
          </button>
        </BubbleMenu>
      )} 
    </>
  )
}
