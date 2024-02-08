import { ComponentProps, ReactNode } from 'react' 

export interface BubbleButtonProps extends ComponentProps<'button'>{
  children: ReactNode
}

export function ButtonMenu(props: BubbleButtonProps) {
  return (
    <button className='p-2 rounded-full text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600 data-[active=true]:text-neutral-700' {...props}/>
  )
}
