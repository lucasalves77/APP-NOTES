import { CaretDown, ChatCenteredText, Code, TextB, TextItalic, TextStrikethrough } from '@phosphor-icons/react'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import { BubbleButton } from '../components/BubbleButton'
import StarterKit from '@tiptap/starter-kit'


export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: ``,
    editorProps: {
      attributes: {
        class: 'outline-none',
      }
    }
  })

  return (
    <div className='overflow-hidden mt-10'>
      <EditorContent  className='text-slate-200' editor={editor} />
      { editor && (
        <BubbleMenu className='bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600' editor={editor}>
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
        </BubbleMenu>
      )} 
    </div>
  )
}
